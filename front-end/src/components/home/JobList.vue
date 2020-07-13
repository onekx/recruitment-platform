<template>
  <div class="main">
    <SearchJob />
    <JobListItem />
  </div>
</template>

<script>
import JobListItem from './JobListItem'
import SearchJob from './SearchJob'

export default {
  name: 'JobList',
  components: {
    JobListItem,
    SearchJob
  }
}
</script>

