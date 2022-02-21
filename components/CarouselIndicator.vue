<template>
  <li
    data-target='#carouselExampleIndicators'
    :data-slide-to='index'
    :class='{ active: isFirst }'
  ></li>
</template>

<script lang='ts'>
export default {
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isFirst: this.index === 0
    }
  }
}
</script>

<style>
</style>
