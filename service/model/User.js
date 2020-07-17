const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    role: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    name: { type: String },
    gender: { type: String },
    age: { type: Number },
    university: { type: String },
    subject: { type: String },
    degree: { type: String },
    des: { type: String }
})

module.exports = mongoose.model('User', UserSchema, 'user')