const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    userid: 'slim',
    password: 'a1234560'
})

const user = mongoose.model('users', userSchema)

module.exports = { user }