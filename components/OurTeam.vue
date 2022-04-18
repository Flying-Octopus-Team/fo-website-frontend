<template>
  <div :class="{ 'fo-members': !membersOverlayHidden, 'fo-members-expanded': membersOverlayHidden }">
    <div class='d-flex flex-wrap fo-member-tiles justify-content-center'>
      <TeamMember
        v-for='(member, index) in members' :key='index'
        :name='member.name'
        :avatar='member.avatar'
      />
    </div>
    <b-button class='fo-member-expand-button fo-gradient-button shadow d-md-none' @click='toggle()'>
      {{ toggleButtonText }}
    </b-button>
    <div v-if='!membersOverlayHidden' class='fo-member-overlay d-md-none'></div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import Member from '~/types/Member'

@Component
export default class OurTeam extends Vue {

  @Prop()
  members!: Member[]

  membersOverlayHidden: boolean = false
  toggleButtonText: string = 'Rozwiń'

  public toggle(): void {
    this.membersOverlayHidden = !this.membersOverlayHidden
    this.toggleButtonText = this.getToggleButtonText()
  }

  public getToggleButtonText(): string {
    if (this.membersOverlayHidden) {
      return 'Zwiń'
    }
    return 'Rozwiń'
  }
}
</script>

