<template>
  <div class='fo-subpage-container fo-projects mx-4'>
    <h4 class='text-center font-weight-light my-4 d-none d-sm-block '>
      Nasza grupa zajmuje się głównie pracą nad grami komputerowymi, jednak realizujemy też inne projekty i jesteśmy
      otwarci na nowe pomysły. Poniżej znajdziesz spis projektów realizowanych w ramach Flying Octopus.
    </h4>
    <div v-for='(project) in projects' :id='project.title' :key='project.title'>
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
          <div class='fo-post-content text-justify mt-2 mb-auto mb-lg-auto' v-html='renderMarkdownDescription(project.description)'></div>
          <b-link v-if='project.link' :href='project.link' class='fo-gradient-button text-center mb-4 py-2 px-4 h4'>
            ZAGRAJ
          </b-link>
          <div class='row justify-content-end mt-4'>
            <div v-for='(tag) in getTag(project.tags)' :key='tag.slug' class='mt-1 mx-1 fo-project-tag'>
              {{tag.name}}
            </div>
          </div>
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
import ProjectTag from '~/types/ProjectTag'


@Component
export default class ProjectsPage extends Vue {

  projects: Project[] = []
  tags: ProjectTag[] = []

  async fetch() {
    this.projects = ProjectsPage.handleFetchedDataAsArray<Project>(
      await this.$content('project')
        .fetch<Project>()
    )

    this.tags = ProjectsPage.handleFetchedDataAsArray<ProjectTag>(
      await this.$content('tag')
        .fetch<ProjectTag>()
    )
  }

  public renderMarkdownDescription(description: string): string {
    return marked(description)
  }

  public getTag(slugs: string[]): ProjectTag[] {
    return slugs.map(slug => this.tags.find(tag => tag.slug === slug))
      .filter((tag): tag is ProjectTag => !!tag)
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
