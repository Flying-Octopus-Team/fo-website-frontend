<template>
  <div>
    <NavigationBar />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar.vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  components: {
    NavigationBar,
    AppFooter
  },
  head() {
    return {
      bodyAttrs: {
        'data-spy': 'scroll',
        'data-target': '#navbar'
      }
    }
  }
}
</script>

<style>
</style>
