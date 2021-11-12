<template>
  <main>
    <section class="this-post">
      <div class="image-con-log">
        <img
          src="../assets/img/octopus_transparent_cropped.png"
          alt="flying logo"
        />
      </div>
      <div class="grad"></div>
      <h4>Aktualność #{{ id }} - {{ title }}</h4>
      <p class="opublikowanie">Opublikowano {{ date }}</p>
      <p class="informationOne">
        {{ description }}
      </p>
      <div
        class="image-cont-first fit-bg"
        :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
      ></div>
      <p class="informationTwo"></p>
      <div class="grad"></div>
    </section>
  </main>
</template>

<script>
import { markdown } from 'markdown'

export default {
  data() {
    return {
      id: Number,
      title: String,
      date: String,
      thumbnail: String,
      description: String,
      author: String,
      content: String,
    }
  },
  created() {
    if (Object.keys(this.$route.params).length === 0) {
      this.$router.push('/blog-list')
    }
    this.id = parseInt(this.$route.params.id)
    this.title = this.$route.params.title
    this.date = this.$route.params.date
    this.thumbnail = this.$route.params.thumbnail
    this.description = this.$route.params.description
    this.author = this.$route.params.author
    this.content = this.$route.params.content
  },
  mounted() {
    const navbar = document.querySelector('#navbar')
    navbar.classList.remove('fixed-top')

    const html = markdown.toHTML(this.content)
    const container = document.querySelector('.informationTwo')
    container.innerHTML = html

    const images = document.querySelectorAll('img')

    images.forEach((image) => {
      if (
        !image.classList.contains('image-cont-first') &&
        image.alt !== 'flying logo'
      ) {
        image.classList.add('image-cont-second')
        image.style.display = 'block'
      }
    })
  },
}
</script>

<style>
</style>