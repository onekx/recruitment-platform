<template>
  <div class="home">
    <Header />
    <JobList />
  </div>
</template>

<script>
import Header from '../components/common/Header'
import JobList from '../components/home/JobList'

export default {
  name: 'Home',
  components: {
    Header,
    JobList
  }
}
</script>

<style>
.home {
  min-width: 1000px;
}
</style>