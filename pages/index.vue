<template>
  <div class='d-flex flex-column fo-main-container'>

    <div class='text-center my-5 py-5'>
      <img class='img-fluid' src='../assets/img/fo-title.svg' alt='Flying Octopus'>
    </div>
    <div class='d-flex flex-row justify-content-center align-content-center my-5 py-5'>
      <a href='' class='fo-nav-btn m-3'>
        <div class='fo-nav-btn-bg'></div>
      </a>
      <a href='' class='fo-nav-btn m-3'>
        <div class='fo-nav-btn-bg'></div>
      </a>
      <a href='' class='fo-nav-btn m-3'>
        <div class='fo-nav-btn-bg'></div>
      </a>
      <a href='' class='fo-nav-btn m-3'>
        <div class='fo-nav-btn-bg'></div>
      </a>
      <a href='' class='fo-nav-btn m-3'>
        <div class='fo-nav-btn-bg'></div>
      </a>
    </div>

    <div class='fo-main-page-content'>
      <p class='container text-center fo-main-text'>
        Jesteśmy zespołem gamedevowym, który składa się z kilkunastu osób
        pragnących rozwijać swoje umiejętności w zakresie tworzenia gier
        komputerowych oraz wspólnie pracować nad kilkoma kreatywnymi projektami.
      </p>
      <div class='d-flex justify-content-center align-content-center flex-wrap fo-main-blog'>
        <BlogPosts :posts='recentBlogPosts' />
        <div class='fo-mascot-img'>
          <img src='../assets/img/smolocti.png' alt='Flying Octopus Mascot'>
        </div>
      </div>
      <p class='container text-center fo-main-text'>Nasze projekty</p>
      <ProjectsCarousel :project-images='projectImages' />
      <p class='container text-center fo-main-text'>Nasz zespół</p>
      <OurTeam :members='activeTeamMembers' />
      <div class='d-flex flex-column fo-main-join'>
        <img class='img-fluid my-4' src='../assets/img/fo-icon.svg' alt='Flying Octopus Logo'>
        <p class='container text-center fo-text-join-top my-4'>Dołącz do nas</p>
        <p class='container text-center fo-text-join-bottom my-4'>Stań się częścią zespołu i twórzmy wspólnie!</p>
        <a href='' class='text-center my-4 py-4'>Czytaj więcej</a>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'
import { FetchReturn } from '@nuxt/content/types/query-builder'

import BlogPosts from '@/components/BlogPosts.vue'
import ProjectsCarousel from '@/components/ProjectsCarousel.vue'

import Blog from '~/types/Blog'
import Project from '~/types/Project'
import OurTeam from '~/components/OurTeam.vue'
import Member from '~/types/Member'

@Component({ components: { BlogPosts, ProjectsCarousel, OurTeam } })
export default class Index extends Vue {

  recentBlogPosts: Blog[] = []
  projectImages: string[] = []
  activeTeamMembers: Member[] = []

  async fetch() {
    this.recentBlogPosts = Index.handleFetchedDataAsArray<Blog>(
      await this.$content('blog')
        .sortBy('date', 'desc')
        .limit(2)
        .fetch<Blog>()
    )

    const images = Index.handleFetchedDataAsArray<Project>(
      await this.$content('project')
        .only('images')
        .fetch<Project>()
    )
    images.forEach((project) => {
      this.projectImages = this.projectImages.concat(project.images)
    })

    this.activeTeamMembers = Index.handleFetchedDataAsArray<Member>(
      await this.$content('member')
        .sortBy('name', 'asc')
        .where({ active: true })
        .fetch<Member>()
    )
  }

  private static handleFetchedDataAsArray<T>(data: (T & FetchReturn) | (T & FetchReturn)[]): T[] {
    if (Array.isArray(data)) {
      return data
    } else {
      return [data]
    }
  }

  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>
