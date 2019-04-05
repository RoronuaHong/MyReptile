const express = require(`express`)
const Crawler = require(`crawler`)
const mongoose = require(`mongoose`)

const { cities } = require(`../constants/cities`)
const { utils } = require(`../utils/utils`)
const { user } = require('../mongodb/boss/user')

const app = express()
mongoose.connect('mongodb://localhost/boss')

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
                    id: (`${url}`).split('.')[0].substr(1),
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

    c.queue({
        uri: `https://www.zhipin.com${url}`,
        // proxy: `http://183.148.158.9:9999` 
    })
}
   
const crawlerListFn = (listArr, post, city, pages, maxConnections, rateLimit) => {
    return pages.map(page => {
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
                            // freject(`----- 爬取结束 -----`)
                            fresolve([])
                            console.log(`----- 爬取结束 -----`)
                            done()

                            return
                        }
    
                        list.each((i, l) => {
                            listArr = [$(l).find(`.info-primary a`).attr(`href`), ...listArr]
                        })
    
                        fresolve(listArr)
                    }
    
                    done()
                }
            })
         
            c.queue({
                uri: `https://www.zhipin.com/${city.code}/?query=${post}&page=${page}&ka=page-${page}`,
                // proxy: `http://183.148.158.9:9999` 
            })
        })
    })
}

app.get(`/`, (req, res, next) => {
    const post = `react`
    const city = cities[0]
    const num = 10
    const rateLimit = 1000

    let pages = []
    let listArr = []
 
    for(let i = 1; i <= 1; i ++) {
        pages = [...pages, i]
    }

    const result = crawlerListFn(listArr, post, city, pages, num, rateLimit)

    Promise.all(result).then(data => {
        const list = utils.arrayDimensionReduction(data)
        const lists = Array.from(new Set(list))
        const promises = lists.map(url => new Promise((reslove, reject) => crawlerDetailFn(url, num, rateLimit, reslove, reject)))
 
        return Promise.all(promises)
    }).then(data => {
        res.send(data)
        console.log(user)
    }).catch(err => {
        console.log(err)
    })
}) 
 
app.listen(3007, () => {
    console.log(`app is listening at porning 3007.`)
})