<template>
  <div class="main">
    <Header @update-city="updateCities" />
    <SearchJob />
    <JobListItem v-for="(city,index) in cities" :key="index" :content="city" />
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
      cities: []
    }
  },
  created() {
    this.updateCities()
  },
  methods: {
    async updateCities() {
      try {
        const { city } = this.$store.state
        const { data } = await request.get(`/recruitment/${city}`)
        this.cities = data.cities
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
