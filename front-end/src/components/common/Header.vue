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
          <li>
            <router-link to="/message">消息</router-link>
          </li>
          <li>
            <router-link to="/resume">简历</router-link>
          </li>
          <li>
            <span @click="dropdown = !dropdown" class="name" v-text="username"></span>
            <div class="dropdown" v-show="dropdown">
              <ul>
                <li>
                  <router-link to="/user">个人中心</router-link>
                </li>
                <li>
                  <router-link to="/setting">账号设置</router-link>
                </li>
                <li>
                  <router-link to="/">退出登录</router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <el-dialog title="切换城市" :visible.sync="dialogVisible" width="400px" center>
      <p>切换城市，获取更准确的职位信息。</p>
      <el-divider></el-divider>
      <el-button v-for="city in cities" :key="city" v-text="city"></el-button>
    </el-dialog>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      username: '孔鑫',
      city: '全国',
      dropdown: false,
      dialogVisible: false,
      cities: ["全国站", "北京站", "上海站", "广州站", "深圳站", "成都站", "杭州站", "武汉站", "苏州站", "重庆站", "天津站", "长沙站"]
    }
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

.name {
  cursor: pointer;
}

.name:hover {
  color: #00b38a;
}

.el-button {
  margin: 10px;
}
</style>