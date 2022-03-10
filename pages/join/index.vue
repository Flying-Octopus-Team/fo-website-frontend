<template>
  <div class='d-flex flex-column fo-subpage-container mx-3 mt-5'>
    <div class='text-center mb-3'>
      <b-img-lazy fluid src='~/assets/img/fo-icon.svg' alt='Flying Octopus' />
    </div>
    <h1 class='text-center mb-5'>
      Co zyskujesz będąc w zespole?
    </h1>
    <FOSectionTitle content='CZŁONEK' class='my-3' />
    <div class='d-flex flex-row flex-wrap'>
      <ul class='h3 fo-checkmarks-list'>
        <li>Udział w spotkaniach</li>
        <li>Wpływ na decyzje</li>
        <li>Udział w szkoleniach</li>
        <li>Poczucie przynależności</li>
        <li>Dowolność wyboru zadań</li>
      </ul>
      <p class='text-justify mt-2'>
        Będąc w zespole, zyskasz możliwość tworzenia gier komputerowych i brania udziału w innych, ciekawych projektach.
        Jeśli nie masz doświadczenia bądź dopiero zaczynasz swoją przygodę w gamedevie, z pewnością pomogą ci szkolenia
        organizowane przez naszych mentorów. Członkowie mają realny wpływ na decyzje podejmowane w zespole oraz kierunek
        rozwoju grupy.
      </p>
    </div>
    <div class='d-flex flex-row flex-wrap'>
      <div class='d-flex flex-column my-2'>
        <FOSectionTitle content='PRAKTYKANT' />
        <p>
          Będąc w zespole, zyskasz możliwość tworzenia gier komputerowych i brania udziału w innych, ciekawych
          projektach. Jeśli nie masz doświadczenia bądź dopiero zaczynasz swoją przygodę w gamedevie, z pewnością pomogą
          ci szkolenia organizowane przez naszych mentorów. Członkowie mają realny wpływ na decyzje podejmowane w
          zespole oraz kierunek rozwoju grupy. Podsumowując, jeśli szukałeś grupy do wspólnego projektowania gier –
          jesteś we właściwym
          miejscu.
        </p>
      </div>
      <div class='d-flex flex-column my-2'>
        <FOSectionTitle content='PARTNER' />
        <p>
          Będąc w zespole, zyskasz możliwość tworzenia gier komputerowych i brania udziału w innych, ciekawych
          projektach. Jeśli nie masz doświadczenia bądź dopiero zaczynasz swoją przygodę w gamedevie, z pewnością pomogą
          ci szkolenia organizowane przez naszych mentorów. Członkowie mają realny wpływ na decyzje podejmowane w
          zespole oraz kierunek rozwoju grupy. Podsumowując, jeśli szukałeś grupy do wspólnego projektowania gier –
          jesteś we właściwym
          miejscu.
        </p>
      </div>
    </div>
    <h3 class='font-weight-light fo-pink-text text-center'>Jeśli chcesz zostać członkiem Flying Octopus, skontaktuj się
      z nami!</h3>
    <h3 class='font-weight-light mb-3'>Wystarczą trzy proste kroki:</h3>
    <ol style='line-height: 2rem'>
      <li><a href='' class='fo-pink-text'>Napisz do nas!</a></li>
      <li>Zrób wyznaczone <span class='fo-pink-text'>zadanie wstępne</span></li>
      <li><span class='fo-pink-text'>Twórz</span> z nami wspaniałe projekty!</li>
    </ol>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'
import SectionTitle from '~/components/SectionTitle.vue'

@Component({ components: { FOSectionTitle: SectionTitle } })
export default class JoinUsPage extends Vue {
}
</script>
