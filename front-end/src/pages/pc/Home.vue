<template>
  <div class="container">
    <PcHeader />
  </div>
</template>

<script>
import PcHeader from '@/components/pc/Header'

export default {
  name: 'PcHome',
  components: {
    PcHeader
  }
}
</script>

<style>
.container {
  min-width: 1000px;
}
</style>