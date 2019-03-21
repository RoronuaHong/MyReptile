const express = require('express')
const cheerio = require('cheerio')
const superagent = require('superagent')
const charset = require('superagent-charset')

const app = express()

charset(superagent)

app.get('/', (req, res, next) => {
    superagent.get('https://www.xiaoheihe.cn/community/57743/list')
        .buffer(true)
        .end((err, sres) => {
            //常用的错误处理
            if(err) {
                return next(err)
            }

            let $ = cheerio.load(sres.text, { decodeEntities: false })
            let items = []

            $('.posts-list-wrapper .title').each((idx, ele) => {
                let $ele = $(ele)

                items.push({
                    title: $ele.html(), 
                    href: $ele.prop('href')
                })
            })

            res.send(items)
        })
})

app.listen(3005, () => {
    console.log('app is listening at porning 3005.')
})