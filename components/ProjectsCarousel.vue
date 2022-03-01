<template>
  <div class='fo-main-carousel'>
    <b-carousel
      id='fo-projects-carousel'
      v-model='slide'
      :interval='5000'
      controls
      @sliding-start='onSlideStart'
      @sliding-end='onSlideEnd'
    >

      <!-- Slides with image only -->
      <b-carousel-slide v-for='(image, index) in projectImages' :key='index' :img-src='image'></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class ProjectsCarousel extends Vue {

  @Prop({ default: () => [] })
  projectImages!: Array<string>

}
</script>
