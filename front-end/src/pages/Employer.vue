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
      </el-tabs>
      <el-button type="text" class="logout-btn" @click="visible = true">退出登录</el-button>
    </div>
    <el-dialog title="退出登录" :visible.sync="visible" width="30%" center>
      <span>是否退出登录？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="logout">确 定</el-button>
      </span>
    </el-dialog>
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
      tabPosition: 'left',
      visible: false
    }
  },
  methods: {
    logout() {
      this.$router.push('/')
      window.localStorage.removeItem('token')
      this.$store.commit({
        type: 'initialState',
        id: '',
        role: ''
      })
    }
  }
}
</script>

<style scoped>
.content {
  width: 1000px;
  margin: 30px auto;
  background-color: #fff;
  padding: 20px 20px 40px;
  border-radius: 5px;
  box-sizing: border-box;
  position: relative;
}

.logout-btn {
  position: absolute;
  left: 80px;
  top: 140px;
  color: #ff0033;
}
</style>