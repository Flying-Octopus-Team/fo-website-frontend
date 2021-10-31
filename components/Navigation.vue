.<template>
  <nav class="navbar navbar-expand-lg fixed-top" id="navbar">
    <nuxt-link to="/" class="navbar-brand"
      ><img src="../assets/img/biały sygnet 2.png" alt="logo"
    /></nuxt-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ml-auto">
        <nuxt-link to="/aboutus" class="nav-item nav-link font-bold">
          o nas</nuxt-link
        >
        <nuxt-link to="/news" class="nav-item nav-link font-bold"
          >Aktualności</nuxt-link
        >
        <nuxt-link to="/projects" class="nav-item nav-link font-bold"
          >Projekty
        </nuxt-link>
        <nuxt-link to="/#ourTeam" class="nav-item nav-link font-bold">
          Zespół
        </nuxt-link>
        <nuxt-link to="/join" class="nav-item nav-link font-bold"
          >Dołącz do nas</nuxt-link
        >
        <nuxt-link to="/contact" class="nav-item nav-link font-bold link-last"
          >kontakt</nuxt-link
        >
      </div>
    </div>
  </nav>
</template>