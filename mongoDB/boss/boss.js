const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/recruit'
const db = mongoose.createConnection(url, { useNewUrlParser: true })
const Schema = mongoose.Schema

// 创建url模型
const urlSchema = new Schema({
    url: { type: String },            // 存储url
    updateTime: { type: String },     // 更新时间
})

// 创建工作详情
const jobSchema = new Schema({
    job: {
        jobName: { type: String },
        jobRequirement: { type: String },
        jobDetail: { type: String }
    },
    detail: {
        releaseTime: { type: String },
        companyName: { type: String },
        typeOfBusiness: { type: String },
        numberOfPeople: { type: String },
        address: { type: String }
    },
    url: { type: String }
})

const Url = db.model('Url', urlSchema, 'bossUrl', false)
const Job = db.model('Job', jobSchema, 'boss', false)

module.exports = { Url, Job }