const express = require(`express`)
const request = require(`request`)
const cheerio = require(`cheerio`)
const superagent = require(`superagent`)
const charset = require(`superagent-charset`)

const app = express()

charset(superagent)

const startOption = url => ({
    url,
    method: `GET`,
})

const secondOption = (url, Cookie, post) => ({
    url,
    method: `POST`,
    headers: {
        Host: `www.lagou.com`,
        Origin: `https://www.lagou.com`,
        Referer: `https://www.lagou.com/jobs/list_${post}?labelWords=&fromSearch=true&suginput=?labelWords=hot`,
        Cookie
    },  
    qs: {
        city: `上海`,
        needAddtionalResult: false,
        first: true,
        pn: 10,
        kd: `${post}`
    }
})

async function getCookie(url) {
    console.log('-------- start retriving Cookie --------')

    return new Promise((resolve, reject) => {
        const option = startOption(url)

        request(option, (err, sres, data) => {
            if(!err && sres.statusCode == 200) {
                resolve([data, sres])
            } else {
                console.log(err)
            }
        })
    })
}

async function getPositionList(url, cookie, post) {
    console.log('-------- start retriving positionList --------')

    return new Promise((resolve, reject) => {
        const option = secondOption(url, cookie, post)

        request(option, (err, sres, data) => {
            if(!err && sres.statusCode == 200) {
                resolve(data)
            } else {
                console.log(err)
            }
        })
    })
}

function getList(arr) {
    console.log(`-------- combine api --------`)

    return arr.map(item => {
        return new Promise((resolve, reject) => {
            superagent.get(`https://www.lagou.com/jobs/${item.positionId}.html`)
                .buffer(true)
                .end((err, fres) => {
                    //常用的错误处理 
                    if(err) {
                        reject(err)
                    }

                    let $ = cheerio.load(fres.text, { decodeEntities: false })
                    let jobDetail = ``
                    const companyName = $(`.job_company_content .fl-cn`).html() || ''
                    const numberOfPeople = $(`.c_feature li:nth-child(3)`).contents().filter((i, con) => con.nodeType === 3)[1].nodeValue || ''

                    $(`.job-detail p`).each((idx, ele) => jobDetail += $(ele).html())

                    resolve({
                        jobDetail,
                        companyName,
                        numberOfPeople
                    })
                })
        })
    })
}

const post = `react`
const url_start = `https://www.lagou.com/jobs/list_${post}?city=%E4%B8%8A%E6%B5%B7&cl=false&fromSearch=true&labelWords=&suginput=`
const url_parse = `https://www.lagou.com/jobs/positionAjax.json`

app.get(`/`, (req, res, next) => {
    (async function() {
        const [data, sres] = await getCookie(url_start)
        const cookie = sres.headers[`set-cookie`]
        const list = await getPositionList(url_parse, cookie, post)
        const dataArray = JSON.parse(list).content ? JSON.parse(list).content.positionResult.result : []
        const promises = getList(dataArray)
        
        Promise.all(promises).then(data => {
            res.send(data)
        })
    })()
})

app.listen(3006, () => {
    console.log(`app is listening at porning 3006.`)
})