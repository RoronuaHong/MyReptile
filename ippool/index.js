const express = require(`express`)
const Crawler = require(`crawler`)

const app = express()

const ippool = (url, maxConnections, rateLimit) => {
    return new Promise((resolve,reject) => {
        const c = new Crawler({
            maxConnections, 
            rateLimit,
            callback: (err, cres, done) => {
                try {

                } catch(err){
                    console.log(err)
                }
            }
        })

        c.queue(url)
    })
}

const ippools = ippool(
    `https://www.xicidaili.com/nn/`,
    5,
    1000
)

module.exports = { ippools }