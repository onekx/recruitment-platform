<template>
  <div class="container">
    <Header />
    <JobList />
  </div>
</template>

<script>
import Header from '../components/Header'
import JobList from '../components/JobList'

export default {
  name: 'PcHome',
  components: {
    Header,
    JobList
  }
}
</script>

<style>
.container {
  min-width: 1000px;
}
</style>