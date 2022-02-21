<template>
  <nav id='navbar' class='navbar navbar-expand-lg'>
    <nuxt-link to='/' class='navbar-brand'
    ><img src='../assets/img/biały sygnet 2.png' alt='logo'
    /></nuxt-link>
    <button
      class='navbar-toggler'
      type='button'
      data-toggle='collapse'
      data-target='#navbarNavAltMarkup'
      aria-controls='navbarNavAltMarkup'
      aria-expanded='false'
      aria-label='Toggle navigation'
    >
      <i class='fas fa-bars'></i>
    </button>
    <div id='navbarNavAltMarkup' class='collapse navbar-collapse'>
      <div class='navbar-nav ml-auto'>
        <nuxt-link to='/about-us' class='nav-item nav-link font-bold'>
          o nas
        </nuxt-link
        >
        <nuxt-link to='/blog-list' class='nav-item nav-link font-bold'
        >Aktualności
        </nuxt-link
        >
        <nuxt-link to='/projects-list' class='nav-item nav-link font-bold'
        >Projekty
        </nuxt-link>
        <nuxt-link to='/#ourTeam' class='nav-item nav-link font-bold'>
          Zespół
        </nuxt-link>
        <nuxt-link to='/join-us' class='nav-item nav-link font-bold'
        >Dołącz do nas
        </nuxt-link
        >
        <nuxt-link
          to='/join-us#contact'
          class='nav-item nav-link font-bold link-last'
        >kontakt
        </nuxt-link
        >
      </div>
    </div>
  </nav>
</template>
