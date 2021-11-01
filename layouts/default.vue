<template>
  <div>
    <Navigation />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  updated() {
    console.log(this.$route.path)
  },
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