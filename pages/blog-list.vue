<template>
  <main>
    <BlogPosts :posts='blogPosts' />
  </main>
</template>

<script lang='ts'>
import BlogPosts from '../components/BlogPosts.vue'

export default {
  components: {
    BlogPosts
  },
  // async asyncData({ $content }) {
  //   const blogPosts = await $content('blog').sortBy('date', 'desc').fetch()
  //   return { blogPosts }
  // },
  // mounted() {
  //   const navbar = document.querySelector('#navbar')!
  //   navbar.classList.remove('fixed-top')
  // }
}
</script>
