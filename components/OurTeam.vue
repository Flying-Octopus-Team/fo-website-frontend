<template>
  <section class="kontaktUs" id="ourTeam">
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
    <div class="secondLa">
      <img
        src="../assets/img/octopus_pictorial_transparent.png"
        alt="octopus"
      />
      <h2>Dołącz do nas</h2>
      <p class="textSecKon">Stań się częścią zespołu i twórzmy wspólnie!</p>
      <a href>Czytaj więcej</a>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    members: Array,
  },
}
</script>

<style>
</style>