<template>
  <div>
    <Navigation />
    <Nuxt />'
    <AppFooter />
  </div>
</template>

<script lang="ts">
import Navigation from '../components/Navigation.vue'
import AppFooter from '../components/AppFooter.vue'

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
    AppFooter,
  },
}
</script>

<style>
</style>