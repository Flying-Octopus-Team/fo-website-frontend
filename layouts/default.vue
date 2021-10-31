.<template>
  <body data-spy="scroll" data-target="#navbar">
    <Navigation />
    <Nuxt />
  </body>
</template>

<script>
import Navigation from '../components/Navigation'
export default {
  head() {},
  components: {
    Navigation,
  },
}
</script>

<style>
</style>