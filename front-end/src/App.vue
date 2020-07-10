<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    isMobile() {
      const flag = navigator.userAgent.match(/(phone|pad|iPhone|ios|iPad|Android|Mobile|IEMobile|MQQBrowser)/i)
      return flag
    }
  },
  created() {
    if (this.isMobile()) this.$router.replace('/index_m')
    else this.$router.replace('/index')
  }
}
</script>