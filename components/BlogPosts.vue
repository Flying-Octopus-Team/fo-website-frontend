<template>
  <div class='d-flex flex-column fo-blog-posts'>
    <div class='fo-line-separator'></div>
    <BlogPost
      v-for='(post) in posts' :key='post.slug'
      :title='post.title'
      :date='post.date'
      :thumbnail='post.thumbnail'
      :description='post.description'
      :author='post.author'
      :content='post.content'
      :slug='post.slug'
    />
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import BlogPost from '@/components/BlogPost.vue'
import Blog from '~/types/Blog'

@Component({ components: { BlogPost } })
export default class BlogPosts extends Vue {

  @Prop({ default: () => [] })
  posts!: Blog[]
}
</script>

<style>
</style>
