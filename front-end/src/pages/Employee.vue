<template>
  <div class="main">
    <Header />
    <EmployeeProfile />
  </div>
</template>

<script>
import EmployeeProfile from '../components/user/EmployeeProfile'
import Header from '../components/common/Header'

export default {
  name: 'Employee',
  components: {
    Header,
    EmployeeProfile
  }
}
</script>