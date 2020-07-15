<template>
  <el-dialog :visible.sync="dialogVisible" width="400px" center>
    <div slot="title">
      <span class="title">招聘网</span>
    </div>
    <el-form>
      <el-form-item>
        <el-input placeholder="请输入邮箱" v-model="email" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入密码" v-model="pwd" show-password clearable></el-input>
      </el-form-item>
    </el-form>
    <div v-if="loginForm">
      <div class="login-btn" @click="login">登录</div>
      <div class="register-btn" @click="changeBtn">立即注册</div>
    </div>
    <div v-if="registerForm">
      <div class="login-btn" @click="register">注册</div>
      <div class="register-btn" @click="changeBtn">立即登录</div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      dialogVisible: true,
      email: '',
      pwd: '',
      loginForm: true,
      registerForm: false
    }
  },
  methods: {
    login() {
      alert('login')
    },
    register() {
      alert('register')
    },
    changeBtn() {
      this.loginForm = !this.loginForm
      this.registerForm = !this.registerForm
    }
  }
}
</script>

<style scoped>
.title {
  color: #00b38a;
  font-size: 25px;
  letter-spacing: 1px;
  font-weight: 600;
}

.login-btn {
  width: 350px;
  height: 48px;
  line-height: 48px;
  color: #fff;
  font-size: 16px;
  background-color: #00b38a;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  letter-spacing: 2px;
}

.login-btn:hover {
  background-color: #36c7a5;
}

.register-btn {
  width: 350px;
  height: 48px;
  line-height: 48px;
  color: #666;
  font-size: 16px;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
}

.register-btn:hover {
  color: #36c7a5;
}
</style>