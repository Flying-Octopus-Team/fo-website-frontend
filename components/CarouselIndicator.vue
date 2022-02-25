<template>
  <li data-target='#carouselExampleIndicators' :data-slide-to='index' :class='{ active: isFirst }'></li>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class CarouselIndicator extends Vue {

  @Prop({ default: () => 0 })
  index!: number

  isFirst: boolean = this.index === 0
}
</script>

<style>
</style>
