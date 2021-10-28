<template>
  <h1>This is the main page.</h1>
</template>

<script lang="ts">
export default {
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
}
</script>
