<template>
  <main>
    <ProjectList :projects="projects" />
  </main>
</template>

<script lang="ts">
import ProjectList from '../components/ProjectList.vue'

export default {
  components: {
    ProjectList,
  },
  // async asyncData({ $content }) {
  //   const projects = await $content('project').fetch()
  //
  //   const tagsData = await $content('tag').fetch()
  //
  //   // projects.forEach((project) => {
  //   //   project.tagData = []
  //   //   project.tags.forEach((tag) => {
  //   //     tagsData.forEach((tagData) => {
  //   //       if (tagData.slug === tag) {
  //   //         project.tagData.push({
  //   //           name: tagData.name,
  //   //           color: tagData.color,
  //   //         })
  //   //       }
  //   //     })
  //   //   })
  //   // })
  //
  //   return { projects }
  // },
  mounted() {
    const navbar = document.querySelector('#navbar')!
    navbar.classList.remove('fixed-top')
  }
}
</script>
