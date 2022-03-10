<template>
  <div class='fo-subpage-container mx-4'>
    <b-img fluid class='mt-4 mb-2' src='~/assets/img/fo-title.svg' alt='Flying Octopus'/>
    <div class='fo-line-separator my-2'></div>
    <h4>{{ blogPost.title }}</h4>
    <p>Opublikowano {{ blogPost.date }}</p>
    <div class='fo-post-content text-justify' v-html='blogContent'></div>
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

    this.blogContent = marked(this.blogPost.content)
  }
}
</script>
