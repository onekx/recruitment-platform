<template>
  <el-dialog :visible.sync="dialogVisible" width="400px" center>
    <el-alert
      :title="errorText"
      type="error"
      center
      show-icon
      v-if="showAlert"
      @close="showAlert = false"
    ></el-alert>
    <div slot="title">
      <span class="title">招聘网</span>
    </div>
    <div v-if="registerForm">
      <el-tabs v-model="role">
        <el-tab-pane label="我要求职" name="employee"></el-tab-pane>
        <el-tab-pane label="我要招人" name="employer"></el-tab-pane>
      </el-tabs>
    </div>
    <el-form>
      <el-form-item>
        <el-input placeholder="请输入邮箱" v-model="email" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入密码" v-model="password" show-password clearable></el-input>
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
import request from '../api'
import { mapMutations } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      dialogVisible: true,
      email: '',
      password: '',
      loginForm: true,
      registerForm: false,
      showAlert: false,
      errorText: '',
      role: 'employee'
    }
  },
  methods: {
    ...mapMutations(['initialState']),
    async login() {
      try {
        const { data } = await request.post('/login', {
          email: this.email,
          password: this.password
        })
        if (data.ok) {
          window.sessionStorage.setItem('token', data.token)
          this.dialogVisible = false
          this.$emit('login-click', {
            login: true,
            role: data.user.role
          })
          this.initialState({
            id: data.user._id,
            role: data.user.role
          })
        }
        else {
          this.errorText = data.message
          this.showAlert = true
        }
      } catch (err) {
        console.log(err)
      }
    },
    async register() {
      try {
        await request.post('/register', {
          role: this.role,
          email: this.email,
          password: this.password
        })
        this.login()
      } catch (err) {
        this.errorText = '注册失败'
        this.showAlert = true
        console.log(err)
      }
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