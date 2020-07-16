<template>
  <div class="main">
    <Header />
    <div class="content">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="form.name" maxlength="5" clearable></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="form.gender" placeholder="请选择性别">
            <el-option label="男" value="man"></el-option>
            <el-option label="女" value="woman"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="毕业院校">
          <el-input v-model="form.university" placeholder="请输入毕业院校"></el-input>
        </el-form-item>
        <el-form-item label="专业">
          <el-input v-model="form.subject" placeholder="请输入所学专业"></el-input>
        </el-form-item>
        <el-form-item label="就读时间">
          <el-date-picker type="date" placeholder="入学时间" v-model="form.startDate"></el-date-picker>
          <span class="line">---</span>
          <el-date-picker placeholder="毕业时间" v-model="form.endDate"></el-date-picker>
        </el-form-item>
        <el-form-item label="学历">
          <el-select v-model="form.degree" placeholder="请选择学历">
            <el-option label="专科" value="associate"></el-option>
            <el-option label="本科" value="bachelor"></el-option>
            <el-option label="研究生" value="master"></el-option>
            <el-option label="博士生" value="doctor"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="个人简介">
          <el-input
            type="textarea"
            v-model="form.desc"
            maxlength="50"
            placeholder="请输入个人简介（五十字以内）"
            style="width: 500px;"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确认修改</el-button>
          <el-button>取消</el-button>
          <el-button type="danger" class="logout-btn" @click="logout">退出登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/Header'

export default {
  name: 'PersonalCenter',
  components: {
    Header
  },
  data() {
    return {
      form: {
        name: '用户5f0ea7f95317cc126023a819',
        gender: '',
        age: '',
        university: '',
        subject: '',
        startDate: '',
        endDate: '',
        degree: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    },
    logout() {
      window.localStorage.removeItem('token')
      this.$router.push('/')
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