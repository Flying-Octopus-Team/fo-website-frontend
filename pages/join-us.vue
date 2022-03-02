<template>
  <div class='d-flex flex-column fo-main-container'>
    <div class='mt-5 mx-2 fo-about-us'>
      <div class='text-center'>
        <img class='img-fluid' src='../assets/img/fo-icon.svg' alt='Flying Octopus'>
      </div>
      <h1 class=''>
        Co zyskujesz będąc w zespole?
      </h1>
    </div>
  </div>
</template>

<script lang='ts'>

export default {
  components: {},
  mounted() {
    const navbar = document.querySelector('#navbar')!
    navbar.classList.remove('fixed-top')
  }
}
</script>
