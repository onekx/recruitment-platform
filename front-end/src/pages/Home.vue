<template>
  <div class="home">
    <Header />
    <SearchJob />
    <JobList />
  </div>
</template>

<script>
import Header from '../components/common/Header'
import SearchJob from '../components/home/SearchJob'
import JobList from '../components/home/JobList'

export default {
  name: 'Home',
  components: {
    Header,
    SearchJob,
    JobList
  }
}
</script>

<style>
.home {
  min-width: 1000px;
}
</style>