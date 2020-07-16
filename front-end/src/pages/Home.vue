<template>
  <div class="main">
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
