const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ResumeSchema = new Schema({
    job: { type: String },
    wage: { type: Number },
    city: { type: String },
    workExperience: { type: String },
    projectExperience: { type: String },
    certificate: { type: String },
    userId: { type: String, unique: true }
})

module.exports = mongoose.model("Resume", ResumeSchema, "resume")