<template>
  <div class="main">
    <JobListItem />
    <JobListItem />
    <JobListItem />
    <JobListItem />
  </div>
</template>

<script>
import JobListItem from './JobListItem'

export default {
  name: 'JobList',
  components: {
    JobListItem
  }
}
</script>

<style scoped>
.main {
  margin: 30px 0;
}
</style>