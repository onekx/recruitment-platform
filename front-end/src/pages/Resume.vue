<template>
  <div class="main">
    <Header />
    <div class="content">
      <div>
        <div class="info-header">
          <h2>孔鑫</h2>
          <span class="el-icon-male" v-if="gender == 'male'" style="background-color: #4BA1F1;"></span>
          <span class="el-icon-female" v-if="gender == 'female'" style="background-color: #FFC0CB;"></span>
        </div>
        <div class="edu-info">
          <i class="el-icon-school"></i>
          <span>成都东软学院</span>
          <span>|</span>
          <i class="el-icon-reading"></i>
          <span>信息工程</span>
          <span>|</span>
          <i class="el-icon-medal"></i>
          <span>本科</span>
        </div>
        <div>
          <i class="el-icon-message"></i>
          <span class="email">kongxinone@163.com</span>
        </div>
        <el-divider></el-divider>
      </div>
      <div>
        <h3>个人优势</h3>
        <p class="advantage">这里显示个人优势</p>
        <el-divider></el-divider>
      </div>
      <div>
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
      </div>
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
      <el-button type="primary" @click="onSubmit" class="submit-btn">立即上传</el-button>
    </div>
  </div>
</template>

<script>
import Header from '../components/common/Header'

export default {
  name: 'Resume',
  components: {
    Header
  },
  data() {
    return {
      gender: 'male',
      job: '',
      wage: '',
      city: '',
      workExperience: '',
      projectExperience: '',
      certificate: ''
    }
  },
  methods: {
    onSubmit() {
      alert('ok')
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

.submit-btn {
  float: right;
  margin-top: 20px;
}
</style>