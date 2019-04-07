const express = require('express')
const cors = require('cors')

const { jobMethods } = require(`../mongodb/boss/methods`)

const app = express()

app.use(cors())

app.get('/boss/list', (req, res, next) => {
    const result = jobMethods.findAlljob()

    result.then( data=> {
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