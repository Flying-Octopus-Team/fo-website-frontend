<template>
  <main>
    <section class="first">
      <NavigationButtons />
    </section>
  </main>
</template>

<script>
import NavigationButtons from '../components/NavigationButtons'

export default {
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
  components: {
    NavigationButtons,
  },
}
</script>