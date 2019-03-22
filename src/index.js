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
            if(err) {
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

app.listen(3005, () => {
    console.log('app is listening at porning 3005.')
})