<template>
  <div class='layout-container'>
    <div class='wrapper'>
      <FONavBar />
      <Nuxt />
      <div class="push"></div>
    </div>
    <FOFooter />
  </div>
</template>

<script>

import { Component, Vue } from 'nuxt-property-decorator'
import FONavBar from '@/components/FONavBar'
import FOFooter from '@/components/FOFooter'

@Component({ components: { FONavBar, FOFooter } })
export default class DefaultLayout extends Vue {

}
</script>

<style>
</style>
