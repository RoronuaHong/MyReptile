const express = require('express')
const cors = require('cors')

const { jobMethods } = require(`../mongodb/boss/methods`)

const app = express()

app.use(cors())

app.all('*', function (req, res, next) {
    req.header('Accept', 'application/json, text/plain, */*')
    res.header('Content-Type', 'application/json;charset=UTF-8')

    next()
})

app.get('/boss/list', (req, res, next) => {
    //切割关键字
    const keywordArr = req.query.keywords ? (req.query.keywords.trim()).split(/\s/) || (req.query.keywords.trim()).split('|') : []
    const result = jobMethods.findAlljob({
        keywords: keywordArr[0] || ''
    })

    result.then(data=> {
        res.json({
            success: true,
            data
        })
    }).catch(err => {
        res.json({
            success: false
        })
    })
})

app.listen(7713, () => {
    console.log(`app is listening at porning 7713.`)
})