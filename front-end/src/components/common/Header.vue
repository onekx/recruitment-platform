<template>
  <header>
    <div class="header-inner">
      <div class="logo">
        <a href="/">
          <span>求职网</span>
        </a>
      </div>
      <div class="city">
        <span v-text="city" class="city-text"></span>
        <span @click="dialogVisible = true" class="switch-city">[切换城市]</span>
      </div>
      <router-link to="/" class="home-btn">职位</router-link>
      <div class="user-nav">
        <ul>
          <li v-if="role == 'employee'">
            <router-link to="/resume">在线简历</router-link>
          </li>
          <li v-if="role == 'employer'">
            <router-link to="/recruitment">发布职位</router-link>
          </li>
          <li>
            <router-link :to="modifyRoute" v-if="login">个人中心</router-link>
            <span class="name" v-else @click="showLoginDialog">登录</span>
          </li>
        </ul>
      </div>
    </div>
    <el-dialog title="切换城市" :visible.sync="dialogVisible" width="400px" center>
      <p>切换城市，获取更准确的职位信息。</p>
      <el-divider></el-divider>
      <el-button v-for="city in cities" :key="city" v-text="city" @click="changeCity(city)"></el-button>
    </el-dialog>
    <Login v-if="loginDialog" @login-click="setData" />
  </header>
</template>

<script>
import Login from '../Login'
import request from '@/api'

export default {
  name: 'Header',
  components: {
    Login
  },
  data() {
    return {
      city: '全国站',
      dialogVisible: false,
      cities: [],
      login: false,
      loginDialog: false,
      role: ''
    }
  },
  methods: {
    showLoginDialog() {
      this.loginDialog = true
    },
    setData(value) {
      this.login = value.login
      this.role = value.role
    },
    changeCity(city) {
      this.city = city
      this.$store.commit({
        type: 'setCity',
        city
      })
      this.dialogVisible = false
      this.$emit('update-city')
    },
    async getCityList() {
      try {
        const { data } = await request.get('/city')
        this.cities = data.cities
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    modifyRoute() {
      return this.role === 'employee' ? '/employee' : '/employer'
    }
  },
  created() {
    this.role = this.$store.state.role
    const token = window.sessionStorage.getItem('token')
    token ? this.login = true : this.login = false
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
    }
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state))
    })
  },
  mounted() {
    this.getCityList()
  }
}
</script>

<style scoped>
header {
  height: 50px;
  background-color: #202329;
}

a {
  text-decoration: none;
}

.header-inner {
  width: 1000px;
  height: 50px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  float: left;
}

.logo a {
  display: block;
  height: 50px;
  line-height: 50px;
  width: 80px;
}

.logo a span {
  color: #00b38a;
  letter-spacing: 2px;
  font-size: 1.5rem;
}

.city {
  float: left;
  margin-left: 30px;
  height: 50px;
  line-height: 50px;
}

.city-text {
  color: #00b38a;
}

.switch-city {
  color: #a3b5c0;
  margin-left: 10px;
  font-size: 10px;
  cursor: pointer;
}

.switch-city:hover {
  color: #fff;
}

.home-btn {
  display: block;
  float: left;
  height: 50px;
  line-height: 50px;
  margin-left: 20px;
  color: #fff;
}

.home-btn:hover {
  color: #00b38a;
}

ul {
  list-style: none;
}

.user-nav {
  float: right;
  color: #fff;
  height: 50px;
  line-height: 50px;
}

.user-nav li {
  display: inline;
  padding-left: 15px;
}

.user-nav li a {
  color: #fff;
}

.user-nav li a:hover {
  color: #00b38a;
}

.dropdown {
  background-color: #32373e;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: relative;
  z-index: 100;
}

.dropdown ul li {
  display: block;
}

.logout-btn {
  cursor: pointer;
}

.logout-btn:hover {
  color: #00b38a;
}

.name {
  cursor: pointer;
  width: 60px;
  overflow: hidden;
}

.name:hover {
  color: #00b38a;
}

.el-button {
  margin: 10px;
}
</style>