const express = require(`express`)
const Crawler = require(`crawler`)

const { cities } = require(`../constants/cities`)

const app = express()

const crawlerDetailFn = (url, maxConnections, rateLimit, resolve, reject) => {
    const c = new Crawler({
        rateLimit,
        maxConnections,
        callback: (err, cres, done) => {
            if(err) {
                console.log(err)
            } else {
                const $ = cres.$

                let jobDetail = `` 

                const jobName = $(`.info-primary .name h1`).text()
                const releaseTime = `-` 
                const companyName = $(`.sider-company .company-info a`).eq(1).text().trim()
                const jobRequirement = $(`.detail-content .text`).text().trim()
                const typeOfBusiness = $(`.sider-company .icon-industry+a`).text()
                const numberOfPeople = $(`.sider-company .icon-scale`).parent().text()
                const address = $(`.location-address`).text()

                jobDetail += $(`.detail-box .salary`).text().trim() + `/`
                const detailDOM = $(`.detail-box p`).contents().filter((i, con) => con.nodeType === 3)

                for(let i = 0; i < detailDOM.length; i++) {
                    jobDetail += detailDOM[i].data + `/`
                }

                jobDetail = jobDetail.substring(0, jobDetail.length - 1)

                const param = {
                    job: {
                        jobName,
                        jobRequirement,
                        jobDetail
                    },
                    detail: {
                        releaseTime, 
                        companyName, 
                        typeOfBusiness, 
                        numberOfPeople, 
                        address 
                    },
                    url: `https://www.zhipin.com${url}`
                }

                resolve(param)
            }
        }
    })

    c.queue(`https://www.zhipin.com${url}`)
}

const crawlerListFn = (listArr, post, city, page, maxConnections, rateLimit) => {
    return new Promise((fresolve, freject) => {
        const c = new Crawler({
            maxConnections,
            callback: (err, cres, done) => {
                if(err) {
                    console.log(err)
                } else {
                    const $ = cres.$
                    const list = $(`.job-list li`)
     
                    if(list.length <= 0) {
                        freject(`----- 爬取结束 -----`)
                    }

                    list.each((i, l) => {
                        listArr = [$(l).find(`.info-primary a`).attr(`href`), ...listArr]
                    })

                    //TODO: 先将所有listArr存起来
                    const promises = listArr.map(url => new Promise((reslove, reject) => crawlerDetailFn(url, maxConnections, rateLimit, reslove, reject)))

                    Promise.all(promises).then(datas => {
                        fresolve(datas)
                    })
                }

                done()
            }
        })
    
        c.queue(`https://www.zhipin.com/${city.code}/?query=${post}&page=${page}&ka=page-${page}`)
    })
}

app.get(`/`, (req, res, next) => {
    const post = `react`
    const city = cities[0]
    const num = 5
    const rateLimit = 2000

    let page = 1
    let listArr = []
 
    const result = crawlerListFn(listArr, post, city, page, num, rateLimit)
    
    result.then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
    })
})

app.listen(3007, () => {
    console.log(`app is listening at porning 3007.`)
})