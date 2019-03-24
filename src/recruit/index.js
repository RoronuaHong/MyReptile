const express = require(`express`)
const request = require(`request`)
const cheerio = require(`cheerio`)
const async = require(`async`)
const Nightmare = require(`nightmare`)
const superagent = require(`superagent`)
const charset = require(`superagent-charset`)

const app = express()
const nightmare = Nightmare()

charset(superagent)

const startOption = url => ({
    url,
    method: `GET`,
})

const secondOption = (url, Cookie, post, pn) => ({
    url,
    method: `POST`,
    headers: {
        Host: `www.lagou.com`,
        Origin: `https://www.lagou.com`,
        Referer: `https://www.lagou.com/jobs/list_${post}?labelWords=&fromSearch=true&suginput=?labelWords=hot`,
        Cookie
    },
    qs: {
        needAddtionalResult: false,
        kd: `${post}`,
        city: `上海`, 
        first: true,
        pn
    }
})

async function getCookie(url) {
    console.log('-------- start retriving Cookie --------')

    return new Promise((resolve, reject) => {
        const option = startOption(url)

        //TODO: 使用nightmare获取动态加载的验证码图片
        nightmare.goto(url)
            .wait(1000)
            .end()
            .then(data => {
                console.log(data)
            })
        // request(option, (err, sres, data) => {
        //     if(!err && sres.statusCode === 200 && data.indexOf('安全访问验证') <= -1) {
        //         resolve([data, sres])
        //     } else {
        //         let $ = cheerio.load(data, { decodeEntities: false })
 
        //         console.log($(`#captcha`).prop(`src`))
        //         console.log($(`#captcha`).prop(`alt`))
        //     }
        // })
    })
}

async function getPositionList(url, cookie, post, pn) {
    console.log('-------- start retriving positionList --------')
 
    return new Promise((resolve, reject) => {
        const option = secondOption(url, cookie, post, pn)

        request(option, (err, sres, data) => {
            if(!err && sres.statusCode == 200) {
                resolve(data)
            } else {
                console.log(`出错: `, err)
            }
        })
    })
}

const fetchUrl = (url, callback) => {
    superagent.get(url)
        .end((err, res) => {
            // 常用的错误处理
            if(err) {
                console.log(err)
            }

            const param = getInfos(url, res)

            callback(null, param)
        })
}

const getMapLimit = (arrs, num, res) => {
    const urls = arrs.map(l => (`https://www.lagou.com/jobs/${l.positionId}.html`))

    async.mapLimit(urls, num, (url, callback) => {
        fetchUrl(url, callback)
    }, (err, results) => {
        res.send(results) 
    })
}

function getList(arr) {
    console.log(`-------- combine api --------`)

    return arrs.map(item => {
        const positionId = item.positionId 

        return new Promise((resolve, reject) => {
            superagent.get(`https://www.lagou.com/jobs/${positionId}.html`)
                .buffer(true)
                .end((err, res) => {
                    //常用的错误处理
                    if(err) {
                        reject(err)
                    }

                    const param = getInfo(positionId, res)
 
                    resolve(param)
                })
        })
    })
}

const getInfos = (url, res) => {
    let $ = cheerio.load(res.text, { decodeEntities: false })
    let jobRequirement = ``
    let jobDetail = ``

    const jobName = $(`.job-name`).prop(`title`)
    const releaseTime = $(`.publish_time`).html()
    const companyName = $(`.job_company_content .fl-cn`).html().trim() || ''
    const addressLen = $(`.work_addr`).contents().filter((i, con) => con.nodeType === 3).length
    const address = $(`.work_addr`).contents().filter((i, con) => con.nodeType === 3)[addressLen - 2].nodeValue.trim()
    const typeOfBusiness = $(`.c_feature li:nth-child(1)`).contents().filter((i, con) => con.nodeType === 3)[1].nodeValue.trim()
    const numberOfPeople = $(`.c_feature li:nth-child(3)`).contents().filter((i, con) => con.nodeType === 3)[1].nodeValue.trim() ?
        $(`.c_feature li:nth-child(3)`).contents().filter((i, con) => con.nodeType === 3)[1].nodeValue.trim() :
        $(`.c_feature li:nth-child(4)`).contents().filter((i, con) => con.nodeType === 3)[1].nodeValue.trim()


    jobRequirement += $(`.job-advantage p`).html() + `</br>`
    jobRequirement += $(`.job-detail`).html()

    $(`.job_request span`).each((i, l) => {
        jobDetail += $(l).html()
    })

    const param = {
        job: {
            jobName,
            jobDetail,
            jobRequirement,
        },
        detail: {
            releaseTime,
            companyName,
            typeOfBusiness,
            numberOfPeople,
            address
        },
        url
    }

    return param
}

const getInfo = (positionId, res) => {
    let $ = cheerio.load(res.text, { decodeEntities: false })
    let jobRequirement = ``
    let jobDetail = ``

    const jobName = $(`.job-name`).prop(`title`)
    const releaseTime = $(`.publish_time`).html()
    const companyName = $(`.job_company_content .fl-cn`).html().trim() || ''
    const addressLen = $(`.work_addr`).contents().filter((i, con) => con.nodeType === 3).length
    const address = $(`.work_addr`).contents().filter((i, con) => con.nodeType === 3)[addressLen - 2].nodeValue.trim()
    const typeOfBusiness = $(`.c_feature li:nth-child(1)`).contents().filter((i, con) => con.nodeType === 3)[1].nodeValue.trim()
    const numberOfPeople = $(`.c_feature li:nth-child(3)`).contents().filter((i, con) => con.nodeType === 3)[1].nodeValue.trim() ?
        $(`.c_feature li:nth-child(3)`).contents().filter((i, con) => con.nodeType === 3)[1].nodeValue.trim() :
        $(`.c_feature li:nth-child(4)`).contents().filter((i, con) => con.nodeType === 3)[1].nodeValue.trim()


    jobRequirement += $(`.job-advantage p`).html() + `</br>`
    jobRequirement += $(`.job-detail`).html()

    $(`.job_request span`).each((i, l) => {
        jobDetail += $(l).html()
    })

    const param = {
        positionId,
        job: {
            jobName,
            jobDetail,
            jobRequirement,
        },
        detail: {
            releaseTime,
            companyName,
            typeOfBusiness, 
            numberOfPeople,
            address
        },
        url: `https://www.lagou.com/jobs/${positionId}.html`
    }

    return param
}

const post = `react`
const url_start = `https://www.lagou.com/jobs/list_${post}?city=%E4%B8%8A%E6%B5%B7&cl=false&fromSearch=true&labelWords=&suginput=`
const url_parse = `https://www.lagou.com/jobs/positionAjax.json`

app.get(`/`, (req, res, next) => {
    (async () => {
        let pn = 1
 
        const num = 2 
        const [data, sres] = await getCookie(url_start)
        const cookie = sres.headers[`set-cookie`]
        const list = await getPositionList(url_parse, cookie, post, pn)
        const dataArray = JSON.parse(list).content ? JSON.parse(list).content.positionResult.result : []
        const promises = getList(dataArray)

        Promise.all(promises).then(datas => {
            res.send(datas)
        })

        getMapLimit(dataArray, num, res)
        //TODO: 判断是否操作太过频繁
        // res.send(list)
    })()
})

app.listen(3006, () => {
    console.log(`app is listening at porning 3006.`)
})