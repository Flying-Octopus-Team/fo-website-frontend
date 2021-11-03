<template>
  <main>
    <DetailedAboutUs />
  </main>
</template>

<script lang="ts">
import DetailedAboutUs from '../components/DetailedAboutUs.vue'

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

<style>
</style>