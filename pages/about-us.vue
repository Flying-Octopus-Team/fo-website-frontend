<template>
  <main>
    <DetailedAboutUs />
  </main>
</template>

<script lang="ts">
import DetailedAboutUs from '../components/DetailedAboutUs.vue'
import '../assets/css/subpages/main.css'
import '../assets/css/animate.css'

export default {
  components: {
    DetailedAboutUs,
  },
  mounted() {
    const navbar = document.querySelector('#navbar')!
    navbar.classList.remove('fixed-top')
  },
}
</script>