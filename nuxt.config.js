export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Flying Octopus',
    htmlAttrs: {
      lang: 'pl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      {
        hid: 'description',
        name: 'description',
        content: 'Jesteśmy zespołem gamedevowym, który składa się z kilkunastu osób pragnących rozwijać swoje umiejętności w zakresie tworzenia gier komputerowych oraz wspólnie pracować nad kilkoma kreatywnymi projektami.'
      },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      { hid: 'og-title', property: 'og:title', content: 'Flying Octopus' },
      {
        hid: 'og-desc',
        property: 'og:description',
        content: 'Jesteśmy zespołem gamedevowym, który składa się z kilkunastu osób pragnących rozwijać swoje umiejętności w zakresie tworzenia gier komputerowych oraz wspólnie pracować nad kilkoma kreatywnymi projektami.'
      },
      {
        hid: 'og-image', property: 'og:image',
        content: 'https://flyingoctopus.pl/img/fo-title.svg'
      },
      { hid: 'og-url', property: 'og:url', content: 'https://flyingoctopus.pl' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' }
    ],
    script: []
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources'
  ],

  css: [
    '@/assets/scss/main.scss'
  ],

  styleResources: {
    scss: []
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    fallback: true
  }
}
