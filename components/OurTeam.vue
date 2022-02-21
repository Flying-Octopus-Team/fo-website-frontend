<template>
  <div>
    <h2>Nasz Zespół</h2>
    <div class='firstLa'>
      <div class='contTeam'>
        <TeamMember
          v-for='(member, index) in members'
          :key='index'
          :name='member.name'
          :avatar='member.avatar'
        />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  props: {
    members: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
</style>
