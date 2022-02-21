<template>
  <div>
    <h2>Nasz Zespół</h2>
    <div class="firstLa">
      <div class="contTeam">
        <TeamMember
          v-for="(member, index) in members"
          :name="member.name"
          :avatar="member.avatar"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    members: Array,
  },
}
</script>

<style>
</style>