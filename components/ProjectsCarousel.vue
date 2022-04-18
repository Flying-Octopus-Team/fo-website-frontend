<template>
  <div class='fo-main-carousel'>
    <b-carousel
      id='fo-projects-carousel'
      :interval='5000'
      controls
      indicators
    >
      <b-link v-for='(image, index) in projectImages' :key='index' :to='{path: "/projects", hash: "#" + image.link}'>
        <b-carousel-slide :key='index' :img-src='image.image'></b-carousel-slide>
      </b-link>
    </b-carousel>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import ProjectCarouselImage from '~/types/ProjectCarouselImage'

@Component
export default class ProjectsCarousel extends Vue {

  @Prop({ default: () => [] })
  projectImages!: ProjectCarouselImage[]
}
</script>
