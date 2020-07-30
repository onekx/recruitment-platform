<template>
  <div class="main">
    <Header />
    <div class="content">
      <UserInfo />
      <h3>期望职位</h3>
      <el-form ref="form" label-width="80px" style="padding-top: 20px;">
        <el-form-item label="期望职位">
          <el-input v-model="job" placeholder="请输入期望职位" size="small"></el-input>
        </el-form-item>
        <el-form-item label="薪资要求">
          <el-input v-model="wage" placeholder="请输入薪资（单位：千）" size="small"></el-input>
        </el-form-item>
        <el-form-item label="工作城市">
          <el-input v-model="city" placeholder="请输入城市" size="small"></el-input>
        </el-form-item>
      </el-form>
      <el-divider></el-divider>
      <div>
        <h3>工作经历</h3>
        <el-input
          v-model="workExperience"
          placeholder="请输入工作经历"
          type="textarea"
          style="padding-top: 20px;"
          :autosize="{ minRows: 6, maxRows: 10 }"
        ></el-input>
        <el-divider></el-divider>
      </div>
      <div>
        <h3>项目经历</h3>
        <el-input
          v-model="projectExperience"
          placeholder="请输入项目经历"
          type="textarea"
          style="padding-top: 20px;"
          :autosize="{ minRows: 6, maxRows: 10 }"
        ></el-input>
        <el-divider></el-divider>
      </div>
      <div>
        <h3>资格证书</h3>
        <el-input
          v-model="certificate"
          placeholder="请输入资格证书"
          type="textarea"
          style="padding-top: 20px;"
          :autosize="{ minRows: 6, maxRows: 10 }"
        ></el-input>
      </div>
      <el-button type="primary" @click="onSubmit" class="submit-btn">立即提交</el-button>
    </div>
  </div>
</template>

<script>
import Header from '../components/common/Header'
import UserInfo from '../components/UserInfo'
import request from '@/api'
import { mapState } from 'vuex'

export default {
  name: 'Resume',
  components: {
    Header,
    UserInfo
  },
  data() {
    return {
      job: '',
      wage: '',
      city: '',
      workExperience: '',
      projectExperience: '',
      certificate: ''
    }
  },
  mounted() {
    this.getData()
  },
  computed: {
    ...mapState(['userId'])
  },
  methods: {
    async onSubmit() {
      try {
        const data = {
          "job": this.job,
          "wage": this.wage,
          "city": this.city,
          "workExperience": this.workExperience,
          "projectExperience": this.projectExperience,
          "certificate": this.certificate,
          "userId": this.userId
        }
        await request.post('/resume', data)
        alert('提交成功')
      } catch (err) {
        console.log(err)
      }
    },
    async getData() {
      try {
        const { data } = await request.get(`/resume/${this.userId}`)
        if (data.ok) {
          this.job = data.resume.job
          this.city = data.resume.city
          this.certificate = data.resume.certificate
          this.projectExperience = data.resume.projectExperience
          this.workExperience = data.resume.workExperience
          this.wage = data.resume.wage
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.content {
  width: 1000px;
  margin: 30px auto;
  background-color: #fff;
  padding: 30px 30px 80px;
}

h2 {
  font-weight: 500;
  display: inline-block;
  padding-right: 10px;
}

h3 {
  font-weight: 500;
  border-left: 4px solid #53cac3;
  padding-left: 10px;
  color: #414a60;
}

.el-input {
  width: 200px;
}

.submit-btn {
  float: right;
  margin-top: 20px;
}
</style>