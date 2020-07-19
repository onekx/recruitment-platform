<template>
  <div class="main">
    <Header />
    <EmployerProfile />
  </div>
</template>

<script>
import EmployerProfile from '../components/user/EmployerProfile'
import Header from '../components/common/Header'

export default {
  name: 'Employer',
  components: {
    Header,
    EmployerProfile
  }
}
</script>