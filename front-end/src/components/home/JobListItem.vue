<template>
  <div class="job-card" @click="toDetail">
    <div class="job-inner">
      <div class="job-info">
        <div class="job-title">
          <span class="name">{{content.name}}</span>
          <span class="job-city">{{content.city}}</span>
          <span class="job-post-time">发布于{{content.time.month}}月{{content.time.date}}号</span>
        </div>
        <div class="job-limit">
          <span class="pay">{{content.minWage}}-{{content.maxWage}}K</span>
          <span>{{content.minYear}}-{{content.maxYear}}年</span>
          <em class="divide"></em>
          <span>{{content.degree}}</span>
        </div>
      </div>
      <div class="company-info">
        <div class="company-text">
          <span class="name">{{this.company.name}}</span>
          <div class="company-intro">
            <span>{{this.company.type}}</span>
            <em class="divide"></em>
            <span>{{this.company.scale}}人</span>
          </div>
        </div>
        <img :src="company.logo" alt="logo" />
      </div>
    </div>
  </div>
</template>

<script>
import request from '@/api'

export default {
  name: 'JobListItem',
  props: ["content"],
  created() {
    this.translation()
    this.getCompanyInfo()
  },
  data() {
    return {
      company: {
        name: '',
        type: '',
        scale: '',
        logo: ''
      }
    }
  },
  methods: {
    translation() {
      switch (this.content.degree) {
        case 'bachelor':
          this.content.degree = '本科'
          break
        case 'master':
          this.content.degree = '研究生'
          break
        case 'doctor':
          this.content.degree = '博士生'
          break
        default:
          this.content.degree = '专科'
      }
    },
    async getCompanyInfo() {
      try {
        const { data } = await request.get(`/company/recruitment/${this.content._id}`)
        this.company.name = data.company.name
        this.company.type = data.company.type
        this.company.logo = data.company.logo
        this.company.scale = data.company.scale
      } catch (err) {
        console.log(err)
      }
    },
    toDetail() {
      this.$router.push('/job_detail')
    }
  }
}
</script>

<style scoped>
.job-card {
  height: 100px;
  width: 900px;
  background-color: #fff;
  padding: 0 30px;
  margin: 0 auto;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 30px;
}

.job-inner {
  width: auto;
  height: 70px;
  padding-top: 20px;
}

.job-info {
  float: left;
}

.company-info {
  float: right;
  width: 300px;
}

.job-city {
  color: #00c2b3;
  font-weight: 600;
  margin-left: 10px;
}

.job-city::before {
  content: "[";
}

.job-city::after {
  content: "]";
}

.job-post-time {
  font-size: 13px;
  color: #8d92a1;
  margin-left: 10px;
}

.job-limit {
  height: 26px;
  color: #61687c;
  margin-top: 10px;
}

.pay {
  color: #fc703e;
  margin-right: 10px;
}

.divide {
  display: inline-block;
  width: 1px;
  height: 12px;
  vertical-align: middle;
  background: #e0e0e0;
  margin: 0 10px;
}

.company-text {
  width: auto;
  float: left;
}

.name {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 3px;
  color: #00c2b3;
}

img {
  width: 50px;
  height: 50px;
  float: right;
}

.company-intro {
  color: #61687c;
  margin-top: 10px;
}
</style>