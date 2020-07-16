<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #f6f6f8;
}

.main {
  min-width: 1000px;
}
</style>