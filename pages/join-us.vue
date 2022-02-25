<template>
  <main>
    <DetailedJoinUs />
    <ContactPage />
  </main>
</template>

<script lang="ts">
import DetailedJoinUs from '../components/DetailedJoinUs.vue'

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
