<template>
  <div class='fo-section-title d-flex flex-row '>
    <div class='hr-left m-auto flex-grow-1' />
    <h1 class='hr-text mx-4 my-0 font-weight-bold'>{{content}}</h1>
    <div class='hr-right m-auto flex-grow-1' />
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator'


@Component
export default class SectionTitle extends Vue {

  @Prop({ default: () => '' })
  content!: String

}
</script>
