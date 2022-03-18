<template>
  <div class='fo-subpage-container mx-3'>
    <BlogPosts :posts='posts'></BlogPosts>
    <b-pagination
      v-model='currentPage'
      :total-rows='totalRows'
      :per-page='recordsPerPage'
      size='lg'
      align='right'
      hide-goto-end-buttons
    >
    </b-pagination>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import { FetchReturn } from '@nuxt/content/types/query-builder'
import BlogPosts from '~/components/BlogPosts.vue'
import Blog from '~/types/Blog'

@Component({ components: { BlogPosts } })
export default class BlogListPage extends Vue {
  posts: Blog[] = []
  currentPage: number = 1
  totalRows: number = 0
  recordsPerPage: number = 1
  isLoading: boolean = false
  params: string = ''

  created() {
    this.$content('blog').only('title').fetch().then((response) => {
      if (Array.isArray(response)) {
        this.totalRows = response.length
      } else {
        this.totalRows = 1
      }
    })
    this.loadBlogs()
  }

  loadBlogs() {
    this.isLoading = true
    this.$content('blog')
      .sortBy('date', 'desc')
      .skip(this.recordsPerPage * (this.currentPage - 1))
      .limit(this.recordsPerPage)
      .fetch<Blog>()
      .then((response) => {
        if (response) {
          this.posts = BlogListPage.handleFetchedDataAsArray(response)
          this.isLoading = false
        }
      })
  }

  @Watch('currentPage')
  onCurrentPageChange() {
    this.loadBlogs()
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
