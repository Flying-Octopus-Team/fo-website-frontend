<template>
  <div class='fo-member-tile d-flex flex-column align-items-center text-center px-2 py-3'>
    <b-img-lazy class='m-2' :src='avatar' alt='avatar' />
    <h6 class='pt-2'>{{ name }}</h6>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class TeamMember extends Vue {

  @Prop({ default: () => 'Name' })
  name!: string

  @Prop({ default: () => '' }) // TODO: Default avatar link
  avatar!: string

}
</script>
