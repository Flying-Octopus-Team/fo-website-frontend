<template>
  <li
    data-target="#carouselExampleIndicators"
    :data-slide-to="index"
    :class="{ active: isFirst }"
  ></li>
</template>

<script>
export default {
  props: {
    index: Number,
  },
  data() {
    return {
      isFirst: this.index === 0,
    }
  },
}
</script>

<style>
</style>