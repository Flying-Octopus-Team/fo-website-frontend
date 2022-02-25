<template>
  <div>
    <FONavBar />
    <Nuxt />
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
