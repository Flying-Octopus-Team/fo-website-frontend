<template>
  <div class='fo-main-carousel'>
    <b-carousel
      id='fo-projects-carousel'
      :interval='5000'
      controls
      indicators
    >
      <b-link
        v-for='(image, index) in carouselImages' :key='index'
        :href='image.external ? image.link : undefined'
        :to='image.external ? undefined : {path: "/projects", hash: "#" + image.project}'
      >
        <b-carousel-slide :key='index' :img-src='image.image'></b-carousel-slide>
      </b-link>
    </b-carousel>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import MainCarousel from '~/types/MainCarousel'

@Component
export default class MainPageCarousel extends Vue {

  @Prop({ default: () => [] })
  carouselImages!: MainCarousel[]
}
</script>
