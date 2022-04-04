<template>
  <div class='d-flex flex-column fo-subpage-container mx-2 mx-md-4'>
    <b-img fluid class='fo-post-title-img mt-4 mb-2 mr-auto' src='~/assets/img/fo-title.svg' alt='Flying Octopus' />
    <div class='fo-line-separator my-2'></div>
    <h1>{{ blogPost.title }}</h1>
    <p class='fo-pink-text'>Opublikowany {{ formatDate(blogPost.date) }}</p>
    <div class='fo-post-content text-justify mt-4 mx-2 mx-md-4 mx-xl-5' v-html='blogContent'></div>
    <div class='fo-line-separator my-2'></div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'
import { marked } from 'marked'
import BlogPosts from '@/components/BlogPosts.vue'
import Blog from '~/types/Blog'

@Component({ components: { BlogPosts } })
export default class BlogPage extends Vue {

  // Not sure how to properly do this, providing dummy object instead
  blogPost: Blog = {
    title: '',
    date: '',
    thumbnail: '',
    description: '',
    author: '',
    content: '',
    slug: ''
  }

  blogContent: string = ''

  async fetch() {
    const blog = await this.$content('blog', this.$route.params.slug)
      .limit(1)
      .fetch<Blog>()

    if (Array.isArray(blog)) {
      this.blogPost = blog[0]
    } else {
      this.blogPost = blog
    }

    let content = TextUtil.fixHangingConjunctions(this.blogPost.content)
    this.blogContent = marked(content)
  }

  formatDate(date: string) {
    const ms = new Date(date)
    const formatObject = {
      minimumIntegerDigits: 2,
      useGrouping: false
    }
    const month = (ms.getMonth() + 1).toLocaleString('en-US', formatObject)
    const day = ms.getDate().toLocaleString('en-US', formatObject)
    const year = ms.getFullYear().toLocaleString('en-US', formatObject)
    return `${day}-${month}-${year}`
  }
}
</script>
