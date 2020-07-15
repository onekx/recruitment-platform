const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: { type: String, unique: true },
    password: { type: String }
})

module.exports = mongoose.model('User', UserSchema, 'user')