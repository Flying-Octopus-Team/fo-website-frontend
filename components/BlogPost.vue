<template>
  <div class='my-2'>
    <div class='fo-line-separator my-2'></div>
    <div class='d-flex align-content-center'>
      <img class='mr-2' :src='thumbnail' alt='Post thumbnail' />
      <div class='d-inline-flex flex-column justify-content-around flex-wrap'>
        <h4>Aktualności - {{ title }}</h4>
        <h6>Opublikowany {{ formatDate(date) }}</h6>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class BlogPost extends Vue {

  @Prop({ default: () => '' })
  title!: string

  @Prop({ default: () => '' })
  date!: string

  @Prop({ default: () => '' })
  thumbnail!: string

  @Prop({ default: () => '' })
  description!: string

  @Prop({ default: () => '' })
  author!: string

  @Prop({ default: () => '' })
  content!: string

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

<style>
</style>
