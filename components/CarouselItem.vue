.<template>
  <div class="carousel-item" :class="{ active: isFirst }">
    <img class="d-block w-100" :src="image" alt="First slide" />
  </div>
</template>

<script>
export default {
  props: {
    index: Number,
    image: String,
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