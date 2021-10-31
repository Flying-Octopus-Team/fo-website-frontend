<template>
  <div>
    <Navigation />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Navigation from '../components/Navigation.vue'
export default {
  head() {
    return {
      bodyAttrs: {
        'data-spy': 'scroll',
        'data-target': '#navbar',
      },
    }
  },
  components: {
    Navigation,
  },
}
</script>

<style>
</style>