<template>
  <div class='fo-subpage-container fo-projects mx-4'>
    <h3 class='text-center my-4'>
      Nasza grupa zajmuje się głównie pracą nad grami komputerowymi, jednak realizujemy też inne projekty i jesteśmy
      otwarci na nowe pomysły. Poniżej znajdziesz spis projektów realizowanych w ramach Flying Octopus.
    </h3>
    <template v-for='(project) in projects'>
      <div class='fo-line-separator my-4'></div>
      <div class='my-5'>
        <div>
          <b-carousel
            id='fo-projects-carousel'
            :interval='5000'
            :controls='project.images.length > 1'
            :indicators='project.images.length > 1'
            class='my-4'
          >
            <b-carousel-slide v-for='(image, index) in project.images' :key='index' :img-src='image'></b-carousel-slide>
          </b-carousel>
        </div>
        <div class='text-center'>
          <h4 class='font-weight-bold'>
            {{ project.title }}
          </h4>
          <div class='fo-post-content text-justify mb-5' v-html='renderMarkdownDescription(project.description)'></div>
          <b-link v-if='project.link' :href='project.link' class='fo-gradient-button text-center my-4 py-3 px-5 h3'>
            ZAGRAJ
          </b-link>
        </div>
      </div>
    </template>
    <div class='fo-line-separator'></div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'
import { FetchReturn } from '@nuxt/content/types/query-builder'
import { marked } from 'marked'

import Project from '~/types/Project'


@Component
export default class ProjectsPage extends Vue {

  projects: Project[] = []

  async fetch() {
    this.projects = ProjectsPage.handleFetchedDataAsArray<Project>(
      await this.$content('project')
        .fetch<Project>()
    )
  }

  public renderMarkdownDescription(description: string): string {
    return marked(description)
  }

  private static handleFetchedDataAsArray<T>(data: (T & FetchReturn) | (T & FetchReturn)[]): T[] {
    if (Array.isArray(data)) {
      return data
    } else {
      return [data]
    }
  }

}
</script>
