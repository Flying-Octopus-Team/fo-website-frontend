<template>
  <div>
    <BlogPost
      v-for="(post, index) in posts"
      :key="index"
      :index="index"
      :title="post.title"
      :date="post.date"
      :thumbnail="post.thumbnail"
      :description="post.description"
      :author="post.author"
      :content="post.content"
    />
    <div class="post">
      <div class="grad"></div>
    </div>
  </div>
</template>

<script lang="ts">
import BlogPost from '../components/BlogPost.vue'

export default {
  components: {
    BlogPost,
  },
  props: {
    posts: Array,
  },
}
</script>

<style>
</style>