<template>
  <div class="content">
    <el-form ref="form" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="name" maxlength="5" clearable placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="gender" placeholder="请选择性别">
          <el-option label="男" value="man"></el-option>
          <el-option label="女" value="woman"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="age" placeholder="请输入年龄"></el-input>
      </el-form-item>
      <el-form-item label="毕业院校">
        <el-input v-model="university" placeholder="请输入毕业院校"></el-input>
      </el-form-item>
      <el-form-item label="专业">
        <el-input v-model="subject" placeholder="请输入所学专业"></el-input>
      </el-form-item>
      <el-form-item label="学历">
        <el-select v-model="degree" placeholder="请选择学历">
          <el-option label="专科" value="associate"></el-option>
          <el-option label="本科" value="bachelor"></el-option>
          <el-option label="研究生" value="master"></el-option>
          <el-option label="博士生" value="doctor"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="个人简介">
        <el-input
          type="textarea"
          v-model="desc"
          maxlength="50"
          placeholder="请输入个人简介（五十字以内）"
          style="width: 500px;"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认修改</el-button>
        <el-button @click="onCancel">取消</el-button>
        <el-button type="danger" class="logout-btn" @click="logout">退出登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import request from '@/api'

export default {
  name: 'EmployeeProfile',
  data() {
    return {
      name: '',
      gender: '',
      age: '',
      university: '',
      subject: '',
      degree: '',
      desc: ''
    }
  },
  methods: {
    async onSubmit() {
      try {
        await request.put('/user/5f0ea7f95317cc126023a819', {
          name: this.name,
          gender: this.gender,
          age: this.age,
          university: this.university,
          subject: this.subject,
          degree: this.degree,
          des: this.desc
        })
        Object.assign(this.$data, this.$options.data())
        alert('修改成功')
      } catch (err) {
        console.log(err)
      }
    },
    logout() {
      window.localStorage.removeItem('token')
      this.$store.commit({
        type: 'initialState',
        id: '',
        role: ''
      })
      this.$router.push('/')
    },
    onCancel() {
      Object.assign(this.$data, this.$options.data())
    }
  },
  async created() {
    try {
      const { userId } = this.$store.state
      const { data } = await request.get(`/user/${userId}`)
      this.name = data.user.name
      this.age = data.user.age
      this.gender = data.user.gender
      this.desc = data.user.des
      this.subject = data.user.subject
      this.university = data.user.university
      this.degree = data.user.degree
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>
.content {
  width: 1000px;
  margin: 30px auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-sizing: border-box;
}

.line {
  margin: 0 10px;
}

.logout-btn {
  float: right;
}

.el-form {
  width: 580px;
  margin: 0 auto;
}

.el-input,
.el-date-picker,
.el-select {
  width: 200px;
}
</style>