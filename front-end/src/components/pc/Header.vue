<template>
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
          <a href="/index" title="首页">首页</a>
        </li>
      </ul>
    </div>
    <div class="user-nav">
      <ul>
        <li>
          <a href="/index" title="消息">消息</a>
        </li>
        <li>
          <a href="/index" title="简历">简历</a>
        </li>
        <li>
          <a href="/index" title="个人中心">个人中心</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PcHeader',
  data() {
    return {
      activeIndex: 'home',
      city: '成都'
    }
  }
}
</script>

<style scoped>
.header-inner {
  width: 1000px;
  height: 50px;
  margin: 0 auto;
  background-color: #202329;
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

ul {
  list-style: none;
}

li {
  display: inline-block;
  padding-left: 20px;
}

@media screen and (max-width: 1000px) {
  .header-inner {
    padding: 0 20px;
  }
}
</style>