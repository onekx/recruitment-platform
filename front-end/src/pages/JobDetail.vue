<template>
  <div class="content">
    <Header />
    <div class="job-banner">
      <div class="job-inner">
        <div class="job-info">
          <h1>前端开发</h1>
          <span class="wage-color">2K-3K</span>
          <span class="divide">|</span>
          <span>成都</span>
          <span class="divide">|</span>
          <span>1-3年</span>
          <span class="divide">|</span>
          <span>本科</span>
        </div>
        <div class="btn-cllection">
          <div class="btn">立即沟通</div>
          <div class="btn">投递简历</div>
        </div>
      </div>
    </div>
    <div class="job-detail">
      <h3>职位描述：</h3>
      <p>这里填写职位描述</p>
      <h3 class="company-intro">公司介绍：</h3>
      <p>这里是公司介绍</p>
    </div>
  </div>
</template>

<script>
import Header from '../components/common/Header'

export default {
  name: 'JobDetail',
  components: {
    Header
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
  margin-bottom: 10px;
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