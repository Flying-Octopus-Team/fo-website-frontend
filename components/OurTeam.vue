<template>
  <div class='fo-members'>
    <div class='d-flex flex-wrap fo-member-tiles justify-content-center'>
      <TeamMember
        v-for='(member, index) in members' :key='index'
        :name='member.name'
        :avatar='member.avatar'
      />
    </div>
    <button class='fo-member-expand d-md-none'>Collapse</button>
    <div class='fo-member-overlay d-md-none'></div>
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

