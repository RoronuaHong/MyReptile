const { Url, Job } = require('../boss')

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
            { upsert: true, multi: true },
            (err, doc) => err && console.log('Error:' + err)
        )
    }
}

const jobMethods = {
    findAlljob: option => {
        return new Promise((reslove, reject) => {
            const reg = new RegExp(option.keywords, 'i')

            Job.find({
                'job.jobRequirement': reg
            }, (err, results) => {
                reslove(results)
            })
        })
    },
    updateJob: ({ job, detail, url }) => {
        Job.updateMany(
            { url },
            { $set: { job, detail, url } },
            { upsert: true, multi: true },
            (err, doc) => err && console.log('Error:' + err)
        )
    }
}

module.exports = { urlMethods, jobMethods }