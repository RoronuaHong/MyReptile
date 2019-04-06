const { Url } = require('../url')

const urlMethods = {
    findUrl: url => {
        return new Promise((resolve, reject) => {
            Url.find({ url }, (err, results) => {
                resolve(results)
            })
        })
    },
    updateUrl: url => {
        Url.updateMany(
            { url },
            { $set: { url, updateTime: String(+new Date()) } },
            { upsert: true },
            (err, doc) => err && console.log('Error:' + err)
        )
    }
}

module.exports = { urlMethods }