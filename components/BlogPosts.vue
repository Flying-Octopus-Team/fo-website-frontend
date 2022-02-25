<template>
  <div class='fo-blog-posts'>
    <BlogPost
      v-for='(post, index) in posts'
      :key='index'
      :title='post.title'
      :date='post.date'
      :thumbnail='post.thumbnail'
      :description='post.description'
      :author='post.author'
      :content='post.content'
    />
    <div class='fo-line-separator'></div>
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
