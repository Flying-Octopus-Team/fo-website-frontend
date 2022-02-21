<template>
  <div>
    <div class='grand'></div>
    <div class='projekt'>
      <div class='projekt-left'>
        <ProjectsCarousel :project-images='images' />
      </div>
      <div class='projekt-right'>
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <a :href='link'>ZAGRAJ</a>
        <div class='tagi'>
          <div class='tagElementrny'>
            <div class='tagE'>itch.io</div>
          </div>
          <div class='tagPomocniczy'>
            <div
              v-for='(tag, index) in tags'
              :key='index'
              class='tagP'
              :style='{ background: tag.color }'
            >
              {{ tag.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    images: {
      type: Array,
      default: () => []
    },
    tags: {
      type: Array,
      default: () => []
    },
    link: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>
