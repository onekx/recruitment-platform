<template>
  <div>
    <div class="info-header">
      <h2>{{this.name}}</h2>
      <span class="el-icon-male" v-if="gender === 'male'" style="background-color: #4BA1F1;"></span>
      <span class="el-icon-female" v-if="gender === 'female'" style="background-color: #FFC0CB;"></span>
    </div>
    <div class="edu-info">
      <i class="el-icon-school"></i>
      <span>{{this.university}}</span>
      <span>|</span>
      <i class="el-icon-reading"></i>
      <span>{{this.subject}}</span>
      <span>|</span>
      <i class="el-icon-medal"></i>
      <span>{{this.degree}}</span>
    </div>
    <div>
      <i class="el-icon-message"></i>
      <span class="email">{{this.email}}</span>
    </div>
    <el-divider></el-divider>
    <h3>个人优势</h3>
    <p class="advantage">{{this.advantage}}</p>
    <el-divider></el-divider>
  </div>
</template>

<script>
import request from '@/api'

export default {
  name: 'UserInfo',
  data() {
    return {
      gender: '',
      name: '',
      university: '',
      degree: '',
      subject: '',
      email: '',
      advantage: ''
    }
  },
  mounted() {
    this.getInfo()
  },
  methods: {
    async getInfo() {
      try {
        const { userId } = this.$store.state
        const { data } = await request.get(`/user/${userId}`)
        this.name = data.user.name
        this.email = data.user.email
        this.subject = data.user.subject
        this.gender = data.user.gender
        this.degree = data.user.degree
        this.advantage = data.user.des
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
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

.info-header span {
  display: inline-block;
  color: #fff;
  padding: 2px;
  border-radius: 50%;
}

.edu-info {
  padding: 20px 0;
}

.edu-info span {
  display: inline-block;
  padding: 0 20px 0 3px;
  color: #414a60;
  font-size: 15px;
}

.email {
  color: #414a60;
  padding-left: 3px;
}

.advantage {
  color: #414a60;
  padding-top: 20px;
}
</style>