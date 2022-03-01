<template>
  <div class='d-flex flex-wrap fo-members justify-content-around'>
    <TeamMember
      v-for='(member, index) in members' :key='index'
      :name='member.name'
      :avatar='member.avatar'
    />
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import Member from '~/types/Member'

@Component
export default class OurTeam extends Vue {

  @Prop()
  members!: Member[]
}
</script>

