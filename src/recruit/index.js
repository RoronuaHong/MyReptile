const express = require(`express`)
const request = require(`request`)

const app = express()

app.all(`/`, (req, res, next) => {
    const post = `react`
    const url_start = `https://www.lagou.com/jobs/list_${post}?city=%E4%B8%8A%E6%B5%B7&cl=false&fromSearch=true&labelWords=&suginput=`
    const url_parse = `https://www.lagou.com/jobs/positionAjax.json`

    request({
        url: url_start,
        method: `GET`,
    }, (err, sres, data) => {
        if(!err && sres.statusCode == 200) {
            request({
                url: url_parse,
                method: `POST`,
                headers: {
                    Host: `www.lagou.com`,
                    Origin: `https://www.lagou.com`,
                    Referer: `https://www.lagou.com/jobs/list_${post}?labelWords=&fromSearch=true&suginput=?labelWords=hot`,
                    Cookie: sres.headers[`set-cookie`]
                },  
                qs: {
                    city: `上海`,
                    needAddtionalResult: false,
                    first: true,
                    pn: 10,
                    kd: `${post}`
                }
            }, (err, sres, datas) => {
                if(!err && sres.statusCode == 200) {
                    res.send(datas)
                }
            })
        }
    })
})

app.listen(3006, () => {
    console.log(`app is listening at porning 3006.`)
})