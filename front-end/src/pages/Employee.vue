<template>
  <div class="main">
    <Header />
    <div class="content">
      <el-tabs :tab-position="tabPosition">
        <el-tab-pane label="用户信息">
          <EmployeeProfile />
        </el-tab-pane>
        <el-tab-pane label="投过简历的公司">投过简历的公司</el-tab-pane>
        <el-tab-pane label="退出登录">退出登录</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import EmployeeProfile from '../components/user/EmployeeProfile'
import Header from '../components/common/Header'

export default {
  name: 'Employee',
  components: {
    Header,
    EmployeeProfile
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