<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <CarouselIndicator
        v-for="(projectImage, index) in projectImages"
        :key="index"
        :index="index"
      />
    </ol>
    <div class="carousel-inner">
      <CarouselItem
        v-for="(projectImage, index) in projectImages"
        :key="index"
        :index="index"
        :image="projectImage"
      />
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script lang="ts">
import CarouselItem from '../components/CarouselItem.vue'
import CarouselIndicator from '../components/CarouselIndicator.vue'

export default {
  props: {
    projectImages: Array,
  },
  components: {
    CarouselItem,
    CarouselIndicator,
  },
}
</script>