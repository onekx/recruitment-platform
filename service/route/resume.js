const express = require('express')
const app = express.Router()

const Resume = require('../model/Resume')

app.post('/api/resume', async (req, res) => {
    const exist = await Resume.findOne({
        userId: req.body.userId
    })
    if (exist) {
        Resume.updateOne({ userId: req.body.userId }, {
            $set: {
                job: req.body.job,
                wage: req.body.wage,
                city: req.body.city,
                workExperience: req.body.workExperience,
                projectExperience: req.body.projectExperience,
                certificate: req.body.certificate
            }
        }, err => {
            if (err) res.send({
                ok: false,
                message: '修改失败'
            })
            else res.send({
                ok: true,
                message: '修改成功'
            })
        })
    }
    else {
        const resume = new Resume()
        resume.job = req.body.job
        resume.wage = req.body.wage
        resume.city = req.body.city
        resume.workExperience = req.body.workExperience
        resume.projectExperience = req.body.projectExperience
        resume.certificate = req.body.certificate
        resume.userId = req.body.userId
        resume.save(err => {
            if (err) res.send({
                ok: false,
                message: '上传失败'
            })
            else res.send({
                ok: true,
                message: '上传成功',
                resume
            })
        })
    }
})

app.get('/api/resume/:userId', async (req, res) => {
    Resume.findOne({ userId: req.params.userId }, (err, doc) => {
        if (err) res.send({
            ok: false,
            message: '未找到该简历'
        })
        else res.send({
            ok: true,
            message: '获取成功',
            resume: doc
        })
    })
})

module.exports = app