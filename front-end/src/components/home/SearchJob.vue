<template>
  <div class="search-content">
    <div class="search-item">
      <input type="text" placeholder="搜索职位或公司" v-model="value" class="search-input" />
      <input type="button" value="搜索" class="search-btn" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchJob',
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>
.search-content {
  min-width: 1000px;
  height: 100px;
  background-color: #fff;
  box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);
  position: relative;
}

.search-item {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -470px;
  margin-top: -30px;
}

.search-input {
  display: inline-block;
  padding: 12px 15px;
  width: 800px;
  border: 1px solid #00b38a;
  border-right: 0;
  font-size: 16px;
  line-height: 20px;
}

.search-input:focus {
  border: 1px solid #00b38a;
  border-right: 0;
  outline: none;
}

.search-btn {
  padding: 15px 40px;
  background-color: #00b38a;
  color: #fff;
  border: 0;
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 16px;
}

.search-btn:hover {
  background-color: #00a57f;
  cursor: pointer;
}

.search-btn:focus {
  outline: none;
}
</style>