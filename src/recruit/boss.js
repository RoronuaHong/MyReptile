const express = require(`express`)
const Crawler = require(`crawler`)

const { urlMethods, jobMethods } = require(`../../mongodb/boss/methods`)
const { cities } = require(`../constants/cities`)
const { utils } = require(`../utils/utils`)

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

    c.queue({
        uri: `https://www.zhipin.com${url}`,
        // proxy: `http://183.148.158.9:9999` 
    })
}
   
const crawlerListFn = (listArr, post, city, pages, maxConnections, rateLimit) => {
    return pages.map(page => {
        return new Promise((fresolve, freject) => {
            const c = new Crawler({
                rateLimit,
                maxConnections, 
                callback: (err, cres, done) => {
                    if(err) { 
                        console.log(err)
                    } else {
                        const $ = cres.$
                        const list = $(`.job-list li`)

                        if(list.length <= 0) {
                            fresolve([])
                            console.log(`----- 当前页无数据 -----`)
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
    const post = encodeURIComponent(`前端`)
    const city = cities[0]
    const num = 10
    const rateLimit = 1000

    let pages = []
    let listArr = []
 
    for(let i = 1; i <= 20; i ++) {
        pages = [...pages, i]
    }

    const result = crawlerListFn(listArr, post, city, pages, num, rateLimit)
 
    Promise.all(result).then(data => {
        const list = utils.arrayDimensionReduction(data)
        const lists = Array.from(new Set(list))

        const promises = lists.map(item => {
            const url = item && item.split('.')[0].split('/')[2]

            urlMethods.updateUrl(url)

            return new Promise((reslove, reject) => crawlerDetailFn(item, num, rateLimit, reslove, reject))
        })

        return Promise.all(promises)
    }).then(data => {
        for(let item of data) {
            const url = item.url && item.url.split('.')[2].split('/')[2]
            const result = urlMethods.findUrl(url)

            result.then(data => {
                if(data.length > 0) {
                    jobMethods.updateJob(item)
                }
            })
        }

        res.send(data)
    }).catch(err => {
        console.log(err)
    })
}) 
 
app.listen(3007, () => {
    console.log(`app is listening at porning 3007.`)
})