<template>
  <div class="content">
    <Header />
    <div class="job-banner">
      <div class="job-inner">
        <div class="job-info">
          <h1>{{this.name}}</h1>
          <span class="wage-color">{{wageRange}}</span>
          <span class="divide">|</span>
          <span>{{this.city}}</span>
          <span class="divide">|</span>
          <span>{{yearRange}}</span>
          <span class="divide">|</span>
          <span>{{degreeCn}}</span>
        </div>
        <div class="btn-cllection">
          <div class="btn">投递简历</div>
        </div>
      </div>
    </div>
    <div class="job-detail">
      <h3>职位描述：</h3>
      <p>{{this.jobDesc}}</p>
      <h3 class="company-intro">公司介绍：</h3>
      <p>{{this.companyDesc}}</p>
    </div>
  </div>
</template>

<script>
import Header from '../components/common/Header'
import reqeust from '@/api'

export default {
  name: 'JobDetail',
  components: {
    Header
  },
  data() {
    return {
      name: '',
      minWage: '',
      maxWage: '',
      minYear: '',
      maxYear: '',
      degree: '',
      city: '',
      jobDesc: '',
      companyDesc: ''
    }
  },
  created() {
    this.getJobInfo()
    this.getCompanyInfo()
  },
  methods: {
    async getJobInfo() {
      try {
        const { id } = this.$route.params
        const { data } = await reqeust.get(`/recruitmentid/${id}`)
        this.name = data.content.name
        this.minWage = data.content.minWage
        this.maxWage = data.content.maxWage
        this.maxYear = data.content.maxYear
        this.minYear = data.content.minYear
        this.degree = data.content.degree
        this.jobDesc = data.content.desc
        this.city = data.content.city
      } catch (err) {
        console.log(err)
      }
    },
    async getCompanyInfo() {
      try {
        const { id } = this.$route.params
        const { data } = await reqeust.get(`/company/recruitment/${id}`)
        this.companyDesc = data.company.desc
      } catch (err) {
        console.log(err)
      }
    },
  },
  computed: {
    wageRange() {
      return `${this.minWage}K-${this.maxWage}K`
    },
    yearRange() {
      return `${this.minYear}-${this.maxYear}年`
    },
    degreeCn() {
      switch (this.degree) {
        case 'bachelor':
          return '本科'
        case 'master':
          return '研究生'
        case 'doctor':
          return '博士生'
        default:
          return '专科'
      }
    }
  }
}
</script>

<style scoped>
.content {
  background-color: #fff;
  height: 100%;
  width: 100%;
  position: absolute;
}

.job-banner {
  height: 150px;
  background-color: #f2f5f4;
  box-sizing: border-box;
}

h1 {
  font-weight: 500;
  margin-bottom: 20px;
}

h3 {
  font-weight: 700;
  font-size: 16px;
  color: #424a5e;
  margin-bottom: 15px;
}

.job-inner {
  width: 1000px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

.job-info span {
  color: #555;
  font-size: 17px;
}

.wage-color {
  color: #fd5f39;
}

.divide {
  padding: 0 10px;
}

.btn-cllection {
  padding-top: 20px;
}

.btn {
  display: inline-block;
  margin-right: 17px;
  width: 130px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  border: 1px solid #00b38a;
  border-radius: 3px;
  font-size: 18px;
  background-color: #00b38a;
  color: #fff;
  cursor: pointer;
}

.btn:hover {
  background-color: #00a57f;
}

.job-detail {
  width: 1000px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

.company-intro {
  margin-top: 40px;
}
</style>