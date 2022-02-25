<template>
  <nav id='navbar' class='navbar navbar-expand-lg sticky-top'>
    <nuxt-link to='/' class='navbar-brand ml-2 pt-1'>
      <img src='../assets/img/biały sygnet 2.png' alt='logo' />
    </nuxt-link>
    <button
      class='navbar-toggler'
      type='button'
      data-toggle='collapse'
      data-target='#navbarSupportedContent'
      aria-controls='navbarSupportedContent'
      aria-expanded='false'
      aria-label='Toggle navigation'>
      <i class='fas fa-bars'></i>
    </button>

    <div id='navbarSupportedContent' class='collapse navbar-collapse mr-2'>
      <div class='navbar-nav ml-auto'>
        <nuxt-link to='/about-us' class='nav-item nav-link font-bold mr-4'>o nas</nuxt-link>
        <nuxt-link to='/blog-list' class='nav-item nav-link font-bold mr-4'>Aktualności</nuxt-link>
        <nuxt-link to='/projects-list' class='nav-item nav-link font-bold mr-4'>Projekty</nuxt-link>
        <nuxt-link to='/#ourTeam' class='nav-item nav-link font-bold mr-4'>Zespół</nuxt-link>
        <nuxt-link to='/join-us' class='nav-item nav-link font-bold mr-4'>Dołącz do nas</nuxt-link>
        <nuxt-link to='/join-us#contact' class='nav-item nav-link font-bold mr-4 link-last'>kontakt</nuxt-link>
      </div>
    </div>
  </nav>
</template>
