.
<template>
  <div class='carousel-item' :class='{ active: isFirst }'>
    <img class='d-block w-100 rounded-img' :src='image' alt='First slide' />
  </div>
</template>

<script lang='ts'>
export default {
  props: {
    index: {
      type: Number,
      default: 0
    },
    image: {
      type: String,
      default: ''
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
