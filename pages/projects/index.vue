<template>
  <div class='fo-subpage-container fo-projects mx-4'>
    <h4 class='text-center font-weight-light my-4 d-none d-sm-block '>
      Nasza grupa zajmuje się głównie pracą nad grami komputerowymi, jednak realizujemy też inne projekty i jesteśmy
      otwarci na nowe pomysły. Poniżej znajdziesz spis projektów realizowanych w ramach Flying Octopus.
    </h4>
    <div v-for='(project) in projects' :key='project.title'>
      <div class='fo-line-separator my-4'></div>
      <div class='d-flex flex-wrap flex-lg-nowrap justify-content-center my-5'>
        <div class='col-lg'>
          <b-carousel
            id='fo-projects-carousel'
            :interval='5000'
            :controls='project.images.length > 1'
            :indicators='project.images.length > 1'
          >
            <b-carousel-slide v-for='(image, index) in project.images' :key='index' :img-src='image'></b-carousel-slide>
          </b-carousel>
        </div>
        <div class='d-lg-flex flex-lg-column col-lg mt-4 mt-lg-0 text-center'>
          <h4 class='font-weight-bold'>
            {{ project.title }}
          </h4>
          <div class='fo-post-content text-justify mt-2 mb-4 mb-lg-0' v-html='renderMarkdownDescription(project.description)'></div>
          <b-link v-if='project.link' :href='project.link' class='fo-gradient-button text-center mt-auto py-2 px-4 h4'>
            ZAGRAJ
          </b-link>
        </div>
      </div>
    </div>
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