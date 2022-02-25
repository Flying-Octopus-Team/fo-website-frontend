<template>
  <div class='carousel-item' :class='{ active: isFirst }'>
    <img class='rounded mx-auto d-block fo-carousel-img' :src='image' alt='Slide'/>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class CarouselItem extends Vue {

  @Prop({ default: () => 0 })
  index!: number

  @Prop({ default: () => '' })
  image!: string

  isFirst: boolean = this.index === 0
}
</script>

<style>
</style>
