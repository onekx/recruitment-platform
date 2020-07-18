const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RecruitmentSchema = new Schema({
    name: { type: String },
    city: { type: String },
    minWage: { type: Number },
    maxWage: { type: Number },
    minYear: { type: Number },
    maxYear: { type: Number },
    degree: { type: String },
    desc: { type: String }
})

module.exports = mongoose.model('Recruitment', RecruitmentSchema, 'recruitment')