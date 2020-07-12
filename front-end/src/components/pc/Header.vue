<template>
  <header>
    <div class="header-inner">
      <div class="logo">
        <a href="/index" title="求职招聘">
          <span>求职招聘</span>
        </a>
      </div>
      <div class="nav">
        <ul>
          <li>
            <span v-text="city"></span>
            <a href="/index" title="切换城市" class="change-city">[切换城市]</a>
          </li>
          <li>
            <a href="/index" title="首页">职位</a>
          </li>
        </ul>
      </div>
      <div class="user-nav">
        <ul class="right-nav">
          <li>
            <a href="/index" title="消息">消息</a>
          </li>
          <li>
            <a href="/index" title="简历">简历</a>
          </li>
          <li>
            <el-dropdown>
              <span class="el-dropdown-link">
                孔鑫
                <i class="el-icon-arrow-down"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>账号设置</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'PcHeader',
  data() {
    return {
      activeIndex: 'home',
      city: '全国'
    }
  }
}
</script>

<style scoped>
header {
  height: 50px;
  background-color: #202329;
}

.header-inner {
  width: 1000px;
  margin: 0 auto;
}

.el-dropdown-link {
  cursor: pointer;
  color: #fff;
}

.el-dropdown-link :hover {
  color: #00b38a;
}

.user-nav {
  float: right;
}

.logo {
  float: left;
}

.nav span {
  color: #00b38a;
}

.nav ul {
  float: left;
  list-style: none;
}

.nav ul li {
  padding-left: 20px;
  display: inline-block;
}

.change-city {
  font-size: 10px;
  margin-left: 10px;
  color: #afb5c0;
}

.change-city:hover {
  color: #fff;
}

a {
  text-decoration: none;
  height: 50px;
  line-height: 50px;
  color: #fff;
}

a:hover {
  color: #00b38a;
}

.logo span {
  color: #00b38a;
  letter-spacing: 1px;
  font-size: 25px;
}

.nav {
  float: left;
}

.right-nav {
  list-style: none;
}

.right-nav li {
  display: inline-block;
  padding-left: 20px;
}

@media screen and (max-width: 1000px) {
  .header-inner {
    padding: 0 20px;
  }
}
</style>