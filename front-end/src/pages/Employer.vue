<template>
  <div class="main">
    <Header />
    <div class="content">
      <el-tabs :tab-position="tabPosition">
        <el-tab-pane label="用户信息">
          <EmployerProfile />
        </el-tab-pane>
        <el-tab-pane label="公司信息">
          <Company />
        </el-tab-pane>
        <el-tab-pane label="发布的招聘信息">发布的招聘信息</el-tab-pane>
        <el-tab-pane label="退出登录">退出登录</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Header from '../components/common/Header'
import EmployerProfile from '../components/user/EmployerProfile'
import Company from '../components/Company'

export default {
  name: 'Employer',
  components: {
    Header,
    EmployerProfile,
    Company
  },
  data() {
    return {
      tabPosition: 'left'
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
</style>