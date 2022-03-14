<template>
  <div>
    <div class='d-flex align-content-center'>
      <div class='d-flex align-items-top mr-2'>
        <b-link class='d-flex float-left' :to="{path: '/blogs/' + slug }">
          <b-img-lazy rounded :src='thumbnail' alt='Post thumbnail' />
        </b-link>
      </div>
      <div class='d-flex flex-column'>
        <b-link class='font-weight-bold mb-0' :to="{path: '/blogs/' + slug }">
          <h6>{{ title }}</h6>
        </b-link>
        <small class='mb-1'>{{ formatDate(date) }}</small>
        <p class='my-0'>{{ description }}</p>
      </div>
    </div>
    <div class='fo-line-separator'></div>
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

  @Prop({ default: () => '' })
  slug!: string

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
