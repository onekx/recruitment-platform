<template>
  <div class="main">
    <Header />
    <div class="content">
      <el-form ref="form" label-width="80px">
        <el-form-item label="招聘岗位">
          <el-input v-model="name" maxlength="10" clearable placeholder="请输入招聘岗位"></el-input>
        </el-form-item>
        <el-form-item label="工作地点">
          <el-select v-model="city" placeholder="请选择工作地点">
            <el-option v-for="city in cities" :key="city" :label="city" :value="city"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="工资范围">
          <el-input v-model="minWage" maxlength="5" clearable placeholder="最低工资（单位：千）"></el-input>
          <span class="divide">---</span>
          <el-input v-model="maxWage" maxlength="5" clearable placeholder="最高工资（单位：千）"></el-input>
        </el-form-item>
        <el-form-item label="工作经验">
          <el-input v-model="minYear" maxlength="5" clearable placeholder="最低经验要求（单位：年）"></el-input>
          <span class="divide">---</span>
          <el-input v-model="maxYear" maxlength="5" clearable placeholder="最高经验要求（单位：年）"></el-input>
        </el-form-item>
        <el-form-item label="学历要求">
          <el-select v-model="degree" placeholder="请选择学历">
            <el-option label="专科" value="associate"></el-option>
            <el-option label="本科" value="bachelor"></el-option>
            <el-option label="研究生" value="master"></el-option>
            <el-option label="博士生" value="doctor"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职位描述">
          <el-input type="textarea" v-model="desc" placeholder="请输入职位描述" style="width: 500px;"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">发布</el-button>
          <el-button @click="onCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Header from '../components/common/Header'
import request from '@/api'

export default {
  name: 'Recruitment',
  components: {
    Header
  },
  data() {
    return {
      name: '',
      cities: [],
      city: '',
      minWage: '',
      maxWage: '',
      minYear: '',
      maxYear: '',
      degree: '',
      desc: ''
    }
  },
  created() {
    this.getCity()
    this.getTime()
  },
  methods: {
    async onSubmit() {
      try {
        const { userId } = this.$store.state
        const time = this.getTime()
        await request.post('/recruitment', {
          "name": this.name,
          "city": this.city,
          "minWage": this.minWage,
          "maxWage": this.maxWage,
          "minYear": this.minYear,
          "maxYear": this.maxYear,
          "degree": this.degree,
          "desc": this.degree,
          time,
          userId
        })
        Object.assign(this.$data, this.$options.data())
        alert('发布成功')
      } catch (err) {
        console.log(err)
      }
    },
    onCancel() {
      Object.assign(this.$data, this.$options.data())
    },
    async getCity() {
      try {
        const { data } = await request.get('/city')
        this.cities = data.cities
      } catch (err) {
        console.log(err)
      }
    },
    getTime() {
      const nowDate = new Date()
      const month = nowDate.getMonth() + 1
      const date = nowDate.getDate()
      return { month, date }
    }
  }
}
</script>

<style scoped>
.content {
  width: 1000px;
  margin: 30px auto;
  background-color: #fff;
  padding: 30px;
  border-radius: 5px;
}

.el-input,
.el-select {
  width: 220px;
}

.divide {
  display: inline-block;
  padding: 0 10px;
}
</style>