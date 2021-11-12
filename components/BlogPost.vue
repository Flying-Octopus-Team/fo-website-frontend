<template>
  <div class="post">
    <div class="grad"></div>
    <div class="post-right-con">
      <div
        @click="onClick"
        class="post-img fit-bg"
        :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
      ></div>
      <div class="post-text">
        <h4 @click="onClick">Aktualności #{{ index + 1 }} - {{ title }}</h4>
        <p class="opublikowanie">Opublikowany {{ this.formatDate(date) }}</p>
        <p>
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    index: Number,
    title: String,
    date: String,
    thumbnail: String,
    description: String,
    author: String,
    content: String,
  },
  methods: {
    onClick() {
      this.$router.push({
        name: 'blog-post',
        params: {
          id: (this.index + 1).toString(),
          title: this.title,
          date: this.formatDate(this.date),
          thumbnail: this.thumbnail,
          description: this.description,
          author: this.author,
          content: this.content,
        },
      })
    },
    formatDate(date: string) {
      const ms = new Date(date)
      const formatObject = {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }
      const month = (ms.getMonth() + 1).toLocaleString('en-US', formatObject)
      const day = ms.getDate().toLocaleString('en-US', formatObject)
      const year = ms.getFullYear().toLocaleString('en-US', formatObject)

      return `${day}-${month}-${year}`
    },
  },
}
</script>

<style>
</style>