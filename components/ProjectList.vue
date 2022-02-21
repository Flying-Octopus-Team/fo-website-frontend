<template>
  <section class='projekty'>
    <h2>
      Nasza grupa zajmuje się głównie pracą nad grami komputerowymi, jednak
      realizujemy też inne projekty i jesteśmy otwarci na nowe pomysły. Poniżej
      znajdziesz spis projektów realizowanych w ramach Flying Octopus.
    </h2>
    <ProjectPage
      v-for='(project, index) in projects'
      :key='index'
      :title='project.title'
      :images='project.images'
      :tags='project.tagData'
      :link='project.link'
      :description='project.description'
    />
    <div class='grand'></div>
  </section>
</template>

<script lang='ts'>
import ProjectPage from './ProjectPage.vue'

export default {
  components: {
    ProjectPage
  },
  props: {
    projects: {
      type: Array,
      default: () => []
    }
  }
}
</script>
