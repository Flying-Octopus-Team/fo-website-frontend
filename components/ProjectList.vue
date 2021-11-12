<template>
  <section class="projekty">
    <h2>
      Nasza grupa zajmuje się głównie pracą nad grami komputerowymi, jednak
      realizujemy też inne projekty i jesteśmy otwarci na nowe pomysły. Poniżej
      znajdziesz spis projektów realizowanych w ramach Flying Octopus.
    </h2>
    <Project
      v-for="(project, index) in projects"
      :key="index"
      :title="project.title"
      :images="project.images"
      :tags="project.tagData"
      :link="project.link"
      :description="project.description"
    />
  </section>
</template>

<script lang="ts">
import Project from '../components/Project.vue'

export default {
  props: {
    projects: Array,
  },
  components: {
    Project,
  },
}
</script>