const express = require('express')

const { jobMethods } = require(`../mongodb/boss/methods`)

const app = express()

app.get('/boss', (req, res, next) => {
    const result = jobMethods.findAlljob()

    result.then(data=> {
        res.json(data)
    })
})

app.listen(7713, () => {
    console.log(`app is listening at porning 7713.`)
})