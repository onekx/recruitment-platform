<template>
  <div class="search-content">
    <div class="search-job">
      <input type="text">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchJob',
  data() {
    return {
      search: ''
    }
  }
}
</script>

<style scoped>
.search-content {
  width: 100%;
  height: 100px;
  margin: 0 auto 50px;
  background-color: #fff;
}

.search-job {
  width: 960px;
  margin: 0 auto;
}
</style>