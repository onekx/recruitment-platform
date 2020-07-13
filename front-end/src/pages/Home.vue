<template>
  <div class="home">
    <Header />
    <SearchJob />
  </div>
</template>

<script>
import Header from '../components/common/Header'
import SearchJob from '../components/home/SearchJob'

export default {
  name: 'Home',
  components: {
    Header,
    SearchJob
  }
}
</script>

<style>
.home {
  min-width: 1000px;
}
</style>