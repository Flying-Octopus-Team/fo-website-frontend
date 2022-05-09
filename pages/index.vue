<template>
  <div>
    <div class='d-flex flex-column fo-main-container '>
      <div class='fo-main-title mt-5 mx-3 mx-md-5'>
        <div class='text-center fo-title-img pb-3 pb-md-4 pb-lg-5'>
          <b-img fluid src='~/assets/img/fo-title.svg' alt='Flying Octopus'></b-img>
        </div>
        <div class='row fo-main-navigation justify-content-center align-self-center my-lg-4 my-2'>
          <div class='col-auto my-md-2 my-4'>
            <b-link :to='{path: "/", hash: "#blog"}' class='mx-md-2 mx-4'>
              <img class='img-fluid' src='~/assets/img/icons/news.svg' alt='icon'>
            </b-link>
          </div>
          <div class='col-auto my-md-2 my-4'>
            <b-link :to='{path: "/", hash: "#projects"}' class='mx-md-2 mx-4'>
              <img class='img-fluid' src='~/assets/img/icons/projects.svg' alt='icon'>
            </b-link>
          </div>
          <div class='col-auto my-md-2 my-4'>
            <b-link :to='{path: "/", hash: "#members"}' class='mx-md-2 mx-4'>
              <img class='img-fluid' src='~/assets/img/icons/members.svg' alt='icon'>
            </b-link>
          </div>
          <div class='col-auto my-md-2 my-4'>
            <b-link :to='{path: "/", hash: "#join"}' class='mx-md-2 mx-4'>
              <img class='img-fluid' src='~/assets/img/icons/join.svg' alt='icon'>
            </b-link>
          </div>
        </div>
      </div>
      <div class='d-flex flex-column fo-main-page-content pt-3'>
        <h4 class='fo-main-text text-center font-weight-light text-wrap my-xl-5 my-lg-4 my-3'>
          Jesteśmy zespołem gamedevowym, który składa się z&nbsp;kilkunastu osób pragnących rozwijać swoje umiejętności
          w&nbsp;zakresie tworzenia gier komputerowych oraz wspólnie pracować nad kilkoma kreatywnymi projektami.
        </h4>
        <div id='blog' class='d-flex flex-row align-items-center fo-main-blog'>
          <BlogPosts class='flex-grow-1 pr-lg-4' :posts='recentBlogPosts' />
          <b-img-lazy class='img-fluid d-none d-lg-block' src='~/assets/img/smolocti.png' alt='Flying Octopus Mascot'>
          </b-img-lazy>
        </div>
        <div id='projects' class='fo-main-projects'>
          <h1 class='text-center fo-main-text m-5'>Nasze projekty</h1>
          <div class='fo-line-separator my-4'></div>
          <ProjectsCarousel :project-images='projectImages' />
          <div class='fo-line-separator my-4'></div>
        </div>
        <div id='members'>
          <h1 class='text-center fo-main-text m-4'>Nasz zespół</h1>
          <OurTeam :members='activeTeamMembers' />
        </div>
        <div id='join' class='d-flex flex-column fo-main-join my-4 pt-4'>
          <b-img class='mx-auto' src='~/assets/img/fo-icon.svg' alt='Flying Octopus Logo'>
          </b-img>
          <h3 class='text-center mt-4'>Dołącz do nas</h3>
          <h5 class='text-center fo-text-join-bottom mb-4'>Stań się częścią zespołu i twórzmy wspólnie!</h5>
          <b-link
            href='https://wiki.flyingoctopus.pl/bin/view/Rekrutacja/'
            class='fo-gradient-button text-center my-4 py-2 px-4 h5 font-weight-normal'
          >
            Czytaj więcej
          </b-link>
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
        .where({ active: true })
        .fetch<Member>()
    )

    this.activeTeamMembers = this.activeTeamMembers.sort((a, b) => a.name.localeCompare(b.name, 'pl'))
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
