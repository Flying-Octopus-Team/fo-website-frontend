<template>
  <main>
    <DetailedJoinUs />
    <Contact />
  </main>
</template>

<script lang="ts">
import DetailedJoinUs from '../components/DetailedJoinUs.vue'
import '../assets/css/subpages/main.css'
import '../assets/css/animate.css'

export default {
  components: {
    DetailedJoinUs,
  },
  mounted() {
    const navbar = document.querySelector('#navbar')!
    navbar.classList.remove('fixed-top')
  },
}
</script>

<style>
</style>