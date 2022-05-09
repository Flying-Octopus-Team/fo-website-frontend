<template>
  <b-navbar sticky class='fo-navbar' toggleable='lg' type='dark' variant='info'>
    <b-navbar-brand to='/'>
      <b-img src='~/assets/img/biały sygnet 2.png' alt='logo' />
    </b-navbar-brand>
    <b-navbar-toggle target='nav-collapse'></b-navbar-toggle>
    <b-collapse id='nav-collapse' is-nav>
      <b-navbar-nav class='ml-auto'>
        <b-nav-item exact exact-active-class='active' to='/about'>
          <div class='fo-nav-item'>o nas</div>
        </b-nav-item>
        <b-nav-item exact exact-active-class='active' to='/blogs'>
          <div class='fo-nav-item'>Aktualności</div>
        </b-nav-item>
        <b-nav-item exact exact-active-class='active' to='/projects'>
          <div class='fo-nav-item'>Projekty</div>
        </b-nav-item>
        <b-nav-item exact exact-active-class='active' to='/join'>
          <div class='fo-nav-item'>Dołącz do nas</div>
        </b-nav-item>
        <b-nav-item exact exact-active-class='active' :to='{path: "/join", hash: "#contact"}'>
          <div class='fo-last-nav-item'>kontakt</div>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'


@Component
export default class FONavBar extends Vue {
}
</script>
