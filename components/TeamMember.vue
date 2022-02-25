<template>
  <div class='fo-member-tile'>
    <img :src='avatar' alt='avatar' />
    <p>{{ name }}</p>
  </div>
</template>

<script lang='ts'>
export default {
  props: {
    name: {
      type: String,
      default: 'Name'
    },
    avatar: {
      type: String,
      default: ''
    }
  }
}
</script>
