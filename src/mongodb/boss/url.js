const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/recruit'
const db = mongoose.createConnection(url, { useNewUrlParser: true })
const Schema = mongoose.Schema

// 创建模型
const urlSchema = new Schema({
    url: { type: String },            // 存储url
    updateTime: { type: String },     // 更新时间
})

const Url = db.model('Url', urlSchema, 'bossUrl', false)

module.exports = { Url }