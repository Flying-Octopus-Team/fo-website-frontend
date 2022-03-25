<template>
  <div class='fo-error my-5'>
    <div v-if='error.statusCode === 404' class='d-flex flex-row flex-wrap flex-lg-nowrap justify-content-center my-4'>
      <b-img-lazy fluid src='~/assets/img/octo_404.png' class='my-2 mx-2'></b-img-lazy>
      <div class='d-flex flex-column ml-lg-4'>
        <h1 class='mt-4'>Ta strona nie istnieje</h1>
        <p>
          Szukaliśmy wzdłuż i wszerz, ale nic nie znaleźliśmy!<br>
          Spróbuj wrócić do poprzedniej strony lub na stronę
          główną.
        </p>
      </div>
    </div>
    <h1 v-else class='my-4'>Wystąpił błąd - {{ error.statusCode }} </h1>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: ['error']
}
</script>
