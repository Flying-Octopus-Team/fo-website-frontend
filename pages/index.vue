<template>
  <main>
    <section class="first">
      <NavigationButtons />
    </section>
    <section class="second">
      <p class="tresc">
        Jesteśmy zespołem gamedevowym, który składa się z kilkunastu osób
        pragnących rozwijać swoje umiejętności w zakresie tworzenia gier
        komputerowych oraz wspólnie pracować nad kilkoma kreatywnymi projektami.
      </p>
      <div class="contSec">
        <div class="left">
          <BlogPosts :posts="recentBlogPosts" />
        </div>
        <div class="right">
          <img src="../assets/img/maskotka_FO2.png" alt="maskotka" />
        </div>
      </div>
    </section>
    <section class="projects">
      <h2>Nasze Projekty</h2>
      <div class="grad"></div>
      <div class="center">
        <ProjectsCarousel :projectImages="projectImages" />
      </div>
      <div class="grad"></div>
    </section>
    <section class="kontaktUs" id="ourTeam">
      <OurTeam :members="members" />
      <JoinUs />
    </section>
  </main>
</template>

<script lang="ts">
import NavigationButtons from '../components/NavigationButtons.vue'
import BlogPosts from '../components/BlogPosts.vue'
import ProjectsCarousel from '../components/ProjectsCarousel.vue'
import OurTeam from '../components/OurTeam.vue'
import '../assets/css/main.css'
import '../assets/css/animate.css'

export default {
  async asyncData({ $content }) {
    const recentBlogPosts = await $content('blog')
      .sortBy('date', 'desc')
      .limit(3)
      .fetch()

    const projects = await $content('project').fetch()
    let projectImages = []
    projects.forEach((project) => {
      projectImages = projectImages.concat(project.images)
    })

    const members = await $content('member').fetch()

    return { recentBlogPosts, projectImages, members }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
  mounted() {
    const navbar = document.querySelector('#navbar')!
    navbar.classList.add('fixed-top')
  },
  components: {
    NavigationButtons,
    BlogPosts,
    ProjectsCarousel,
    OurTeam,
  },
}
</script>