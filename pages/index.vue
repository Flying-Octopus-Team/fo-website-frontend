<template>
  <div>
    <div class='d-flex flex-column fo-main-container'>
      <div class='fo-main-title mt-5 mx-5'>
        <div class='text-center fo-title-img'>
          <b-img-lazy fluid src='~/assets/img/fo-title.svg' alt='Flying Octopus'></b-img-lazy>
        </div>
        <div class='d-flex flex-row flex-wrap justify-content-center align-content-center my-2'>
          <a href='' class='m-lg-5 mx-2 my-5 fo-main-nav-btn'>
            <img class='img-fluid' src='~/assets/img/fo-icon.svg' alt='icon'>
          </a>
          <a href='' class='m-lg-5 mx-2 my-5 fo-main-nav-btn'>
            <img class='img-fluid' src='~/assets/img/fo-icon.svg' alt='icon'>
          </a>
          <a href='' class='m-lg-5 mx-2 my-5 fo-main-nav-btn'>
            <img class='img-fluid' src='~/assets/img/fo-icon.svg' alt='icon'>
          </a>
          <a href='' class='m-lg-5 mx-2 my-5 fo-main-nav-btn'>
            <img class='img-fluid' src='~/assets/img/fo-icon.svg' alt='icon'>
          </a>
          <a href='' class='m-lg-5 mx-2 my-5 fo-main-nav-btn'>
            <img class='img-fluid' src='~/assets/img/fo-icon.svg' alt='icon'>
          </a>
          <a href='' class='m-lg-5 mx-2 my-5 fo-main-nav-btn'>
            <img class='img-fluid' src='~/assets/img/fo-icon.svg' alt='icon'>
          </a>
        </div>
      </div>
      <div class='d-flex flex-column fo-main-page-content pt-3'>
        <h4 class='fo-main-text text-center font-weight-light text-wrap'>
          Jesteśmy zespołem gamedevowym, który składa się z kilkunastu osób
          pragnących rozwijać swoje umiejętności w zakresie tworzenia gier
          komputerowych oraz wspólnie pracować nad kilkoma kreatywnymi projektami.
        </h4>
        <div class='d-flex flex-row align-items-center fo-main-blog'>
          <BlogPosts class='flex-grow-1 pr-lg-4' :posts='recentBlogPosts' />
          <b-img-lazy class='img-fluid d-none d-lg-block' src='~/assets/img/smolocti.png' alt='Flying Octopus Mascot' />
        </div>
        <div class='fo-main-projects'>
          <h1 class='text-center fo-main-text m-5'>Nasze projekty</h1>
          <div class='fo-line-separator my-4'></div>
          <ProjectsCarousel :project-images='projectImages' />
          <div class='fo-line-separator my-4'></div>
        </div>
        <div id='members' class='fo-main-members'>
          <h1 class='text-center fo-main-text m-4'>Nasz zespół</h1>
          <OurTeam :members='activeTeamMembers' />
        </div>
        <div class='d-flex flex-column fo-main-join my-4 pt-4'>
          <b-img class='mx-auto' src='~/assets/img/fo-icon.svg' alt='Flying Octopus Logo' />
          <h3 class='text-center mt-4'>Dołącz do nas</h3>
          <h5 class='text-center fo-text-join-bottom mb-4'>Stań się częścią zespołu i twórzmy wspólnie!</h5>
          <b-link to='/join' class='fo-gradient-button text-center my-4 py-2 px-4'>Czytaj więcej</b-link>
        </div>
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
import ProjectCarouselImage from '~/types/ProjectCarouselImage'

@Component({ components: { BlogPosts, ProjectsCarousel, OurTeam } })
export default class MainPage extends Vue {

  recentBlogPosts: Blog[] = []
  projectImages: ProjectCarouselImage[] = []
  activeTeamMembers: Member[] = []

  async fetch() {
    this.recentBlogPosts = MainPage.handleFetchedDataAsArray<Blog>(
      await this.$content('blog')
        .sortBy('date', 'desc')
        .limit(2)
        .fetch<Blog>()
    )

    const images = MainPage.handleFetchedDataAsArray<Project>(
      await this.$content('project')
        .only(['images', 'title'])
        .fetch<Project>()
    )
    images.forEach((project) => {
      this.projectImages.push(new ProjectCarouselImage(project.images[0], project.title))
    })

    this.activeTeamMembers = MainPage.handleFetchedDataAsArray<Member>(
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
