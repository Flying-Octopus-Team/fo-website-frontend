<template>
  <div class='fo-main-carousel'>
    <div class='fo-line-separator mb-4'></div>
    <div id='foProjectCarousel' class='carousel slide' data-ride='carousel'>
      <ol class='carousel-indicators'>
        <CarouselIndicator v-for='(image, index) in projectImages' :key='index' />
      </ol>
      <div class='carousel-inner'>
        <CarouselItem v-for='(image, index) in projectImages' :key='index' :index='index' :image='image' />
      </div>
      <a class='carousel-control-prev' href='#foProjectCarousel' role='button' data-slide='prev'>
        <span class='carousel-control-prev-icon' aria-hidden='true'></span>
        <span class='sr-only'>Previous</span>
      </a>
      <a class='carousel-control-next' href='#foProjectCarousel' role='button' data-slide='next'>
        <span class='carousel-control-next-icon' aria-hidden='true'></span>
        <span class='sr-only'>Next</span>
      </a>
    </div>
    <div class='fo-line-separator mt-4'></div>
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
