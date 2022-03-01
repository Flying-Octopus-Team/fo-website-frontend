<template>
  <div class='d-flex flex-column fo-main-container'>
    <div class='fo-main-title mt-5 mx-2'>
      <div class='text-center fo-title-img'>
        <img class='img-fluid' src='../assets/img/fo-title.svg' alt='Flying Octopus'>
      </div>
      <div class='d-flex flex-row flex-wrap justify-content-center align-content-center my-2'>
        <a href='' class='m-lg-5 mx-2 my-5 fo-main-nav-btn'>
          <img class='img-fluid' src='../assets/img/fo-icon.svg' alt='icon'>
        </a>
        <a href='' class='m-lg-5 mx-2 my-5 fo-main-nav-btn'>
          <img class='img-fluid' src='../assets/img/fo-icon.svg' alt='icon'>
        </a>
        <a href='' class='m-lg-5 mx-2 my-5 fo-main-nav-btn'>
          <img class='img-fluid' src='../assets/img/fo-icon.svg' alt='icon'>
        </a>
        <a href='' class='m-lg-5 mx-2 my-5 fo-main-nav-btn'>
          <img class='img-fluid' src='../assets/img/fo-icon.svg' alt='icon'>
        </a>
        <a href='' class='m-lg-5 mx-2 my-5 fo-main-nav-btn'>
          <img class='img-fluid' src='../assets/img/fo-icon.svg' alt='icon'>
        </a>
        <a href='' class='m-lg-5 mx-2 my-5 fo-main-nav-btn'>
          <img class='img-fluid' src='../assets/img/fo-icon.svg' alt='icon'>
        </a>
      </div>
    </div>
    <div class='fo-main-page-content px-4 pt-3'>
      <h4 class='fo-main-text font-weight-light text-wrap'>  <!--TODO: adjust margins to screen size -->
        Jesteśmy zespołem gamedevowym, który składa się z kilkunastu osób
        pragnących rozwijać swoje umiejętności w zakresie tworzenia gier
        komputerowych oraz wspólnie pracować nad kilkoma kreatywnymi projektami.
      </h4>
      <div class='d-flex flex-wrap fo-main-blog'>
        <BlogPosts :posts='recentBlogPosts'/>
        <div class='d-flex align-items-center'>
          <img class='img-fluid' src='../assets/img/smolocti.png' alt='Flying Octopus Mascot'>
        </div>
      </div>
      <div class='fo-main-projects'>
        <h1 class='text-center fo-main-text m-5'>Nasze projekty</h1>
        <div class='fo-line-separator my-4'></div>
        <ProjectsCarousel :project-images='projectImages' />
        <div class='fo-line-separator my-4'></div>
      </div>
      <div class='fo-main-members'>
        <h1 class='text-center fo-main-text m-4'>Nasz zespół</h1>
        <OurTeam :members='activeTeamMembers' />
      </div>
      <div class='d-flex flex-column fo-main-join my-4 pt-4'>
        <img class='img-fluid' src='../assets/img/fo-icon.svg' alt='Flying Octopus Logo'>
        <h3 class='text-center mt-4'>Dołącz do nas</h3>
        <h5 class='text-center fo-text-join-bottom mb-4'>Stań się częścią zespołu i twórzmy wspólnie!</h5>
        <a href='' class='text-center my-4 py-2'>Czytaj więcej</a>
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
        .limit(10)
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
