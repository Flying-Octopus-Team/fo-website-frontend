<template>
  <div :class="{ 'fo-members': !membersOverlayHidden, 'fo-members-expanded': membersOverlayHidden }">
    <div class='d-flex flex-wrap fo-member-tiles justify-content-center'>
      <div v-for='(member, index) in members' :key='index'>
        <TeamMember
          v-b-modal='"modal-" + index'
          :name='member.name'
          :avatar='member.avatar'
        />
        <b-modal :id='"modal-" + index' content-class='fo-member-modal' centered hide-backdrop>
          <template #modal-header='{ close }'>
            <div class='fo-member-tile'>
              <b-img-lazy class='m-2' :src='member.avatar' alt='avatar' />
            </div>
            <div>
              <h3 class='pt-2'>{{ member.name }}</h3>
              <p class='small'>{{ getMemberRoles(member) }}</p>
            </div>
            <b-button-close text-variant='light' @click='close()' />
          </template>

          <template #default='{ }'>
            <div v-if='member.description'>
              <h5 class='fo-pink-text'>O mnie:</h5>
              <p>{{ member.description }}</p>
            </div>
            <div v-else>🐙</div>
          </template>

          <template #modal-footer='{}'>
            <div v-if='member.links'>
              <p class='fo-pink-text'>Linki:</p>
              <ul v-for='(link, linkIndex) in member.links' :key='linkIndex' style='line-height: 1rem'>
                <li>
                  <b-link :href='link'>{{ link }}</b-link>
                </li>
              </ul>
            </div>
            <div v-else>🐙</div>
          </template>
        </b-modal>
      </div>
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

  public getMemberRoles(member: Member): string {
    if (!member || !member.roles) {
      return ''
    }

    if (member.roles.length > 1) {
      return member.roles.join(', ')
    }

    return member.roles[0]
  }
}
</script>

