const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CompanySchema = new Schema({
    name: { type: String },
    type: { type: String },
    scale: { type: String },
    logo: { type: String },
    userId: { type: String, unique: true }
})

module.exports = mongoose.model('Company', CompanySchema, 'company')