.<template>
  <div>
    <Navigation />
    <Nuxt />
  </div>
</template>

<script>
import Navigation from '../components/Navigation'
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