<template>
  <main>
    <section class="first">
      <NavigationButtons />
    </section>
    <section class="second">
      <p class="tresc">
        Jesteśmy zespołem gamedevowym, który składa się z kilkunastu osób
        pragnących rozwijać swoje umiejętności w zakresie tworzenia gier
        komputerowych oraz wspólnie pracować nad kilkoma kreatywnymi projektami.
      </p>
      <div class="contSec">
        <div class="left">
          <BlogPosts :posts="recentBlogPosts" />
        </div>
        <div class="right">
          <img src="../assets/img/maskotka_FO2.png" alt="maskotka" />
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import NavigationButtons from '../components/NavigationButtons.vue'
import BlogPosts from '../components/BlogPosts.vue'

export default {
  async asyncData({ $content }) {
    let blogPosts = await $content('blog').fetch()
    blogPosts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    const recentBlogPosts = blogPosts.slice(0, 2)
    return { recentBlogPosts }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
  components: {
    NavigationButtons,
    BlogPosts,
  },
}
</script>