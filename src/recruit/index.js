const express = require(`express`)
const request = require(`request`)
const cheerio = require(`cheerio`)
const superagent = require(`superagent`)
const charset = require(`superagent-charset`)

const app = express()

charset(superagent)

app.all(`/`, (req, res, next) => {
    const post = `react`
    const url_start = `https://www.lagou.com/jobs/list_${post}?city=%E4%B8%8A%E6%B5%B7&cl=false&fromSearch=true&labelWords=&suginput=`
    const url_parse = `https://www.lagou.com/jobs/positionAjax.json`

    

    // request({
    //     url: url_start,
    //     method: `GET`,
    // }, (err, sres, data) => {
    //     if(!err && sres.statusCode == 200) {
    //         request({
    //             url: url_parse,
    //             method: `POST`,
    //             headers: {
    //                 Host: `www.lagou.com`,
    //                 Origin: `https://www.lagou.com`,
    //                 Referer: `https://www.lagou.com/jobs/list_${post}?labelWords=&fromSearch=true&suginput=?labelWords=hot`,
    //                 Cookie: sres.headers[`set-cookie`]
    //             },  
    //             qs: {
    //                 city: `上海`,
    //                 needAddtionalResult: false,
    //                 first: true,
    //                 pn: 10,
    //                 kd: `${post}`
    //             }
    //         }, (err, tres, datas) => {
    //             if(!err && tres.statusCode == 200) {
    //                 let items = []
    //                 let positionArr = []
    //                 const dataArray = JSON.parse(datas).content ? JSON.parse(datas).content.positionResult.result : []

    //                 dataArray.forEach(l => {
    //                     positionArr = [...positionArr, `https://www.lagou.com/jobs/${l.positionId}.html`]
    //                 })

    //                 //TODO: 无法将内部内容输出到外部
    //                 positionArr.forEach(item => {
    //                     superagent.get(item)
    //                         .buffer(true)
    //                         .end((err, fres) => {
    //                             //常用的错误处理 
    //                             if(err) {
    //                                 return next(err)
    //                             }

    //                             let $ = cheerio.load(fres.text, { decodeEntities: false })
    //                             let jobDetail = ``

    //                             $(`.job-detail p`).each((idx, ele) => jobDetail += $(ele).html())

    //                             items.push({
    //                                 jobDetail,
    //                                 companyName: $(`.job_company_content .fl-cn`).html() || ''
    //                             })
    //                         })
    //                     })

    //                     res.send(datas)
    //             }
    //         })
    //     }
    // })
})

app.listen(3006, () => {
    console.log(`app is listening at porning 3006.`)
})