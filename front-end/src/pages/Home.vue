<template>
  <div class="main">
    <Header @update-city="updateRecruitments" />
    <SearchJob @search-result="searchResult" />
    <JobListItem v-for="(recruitment,index) in recruitments" :key="index" :content="recruitment" />
  </div>
</template>

<script>
import Header from '../components/common/Header'
import SearchJob from '../components/home/SearchJob'
import JobListItem from '../components/home/JobListItem'
import request from '@/api'

export default {
  name: 'Home',
  components: {
    Header,
    SearchJob,
    JobListItem
  },
  data() {
    return {
      recruitments: []
    }
  },
  mounted() {
    this.updateRecruitments()
  },
  methods: {
    async updateRecruitments() {
      try {
        const { city } = this.$store.state
        const { data } = await request.get(`/recruitment/${city}`)
        this.recruitments = data.recruitments
      } catch (err) {
        console.log(err)
      }
    },
    searchResult(value) {
      this.recruitments = value
    }
  }
}
</script>
