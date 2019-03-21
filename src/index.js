const request = require('request')
const express = require('express')
const cheerio = require('cheerio')
const superagent = require('superagent')
const charset = require('superagent-charset')

const app = express()

charset(superagent)
 
app.all('/', (req, res, next) => {
    superagent.get('https://www.lagou.com/jobs/5719400.html')
        .buffer(true)
        .end((err, sres) => {
            //常用的错误处理
            if (err) {
                return next(err)
            }

            let $ = cheerio.load(sres.text, { decodeEntities: false })
            let items = []
            let jobDetail = ''
            
            $('.job-detail p').each((idx, ele) => {
                let $ele = $(ele)

                jobDetail += $ele.html()
            })
 
            items.push({
                jobDetail,
                companyName: $('.job_company_content .fl-cn').html()
            })

            res.send(items)
        })
    })

    // request({
    //     uri: 'https://api.xiaoheihe.cn/bbs/web/link/list',
    //     method: 'GET',
    //     qs: {
    //         limit: 100,
    //         offset: 60,
    //         topic_id: 57743,
    //         sort_filter: 'reply',
    //         type_filter: 'all',
    //         os_type: 'web',
    //         version: '999.0.0',
    //         hkey: '9550e3ac281d82d16ae953279df13823',
    //         _time: 1553149609
    //     }
    //     // body: JSON.stringify({ email: '155com', password: 'cfdsd.' }) //账号密码 
    // }, (err, sres, data) => {
    //     if(!err && sres.statusCode == 200) {
    //         res.send(data)
    //     }
    // })
// })

app.listen(3005, () => {
    console.log('app is listening at porning 3005.')
})