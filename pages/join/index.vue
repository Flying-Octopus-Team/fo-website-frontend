<template>
  <div class='d-flex flex-column fo-subpage-container mx-3 my-5'>
    <b-img-lazy fluid class='mx-auto mb-3' src='~/assets/img/fo-icon.svg' alt='Flying Octopus' />
    <h1 class='text-center mb-5'>
      Co zyskujesz będąc w zespole?
    </h1>
    <FOSectionTitle content='CZŁONEK' class='my-3' />
    <div class='d-flex flex-wrap flex-lg-nowrap'>
      <ul class='h3 font-weight-light fo-checkmarks-list text-nowrap px-0 ml-2 mr-lg-4'>
        <li>Udział w spotkaniach</li>
        <li>Wpływ na decyzje</li>
        <li>Udział w szkoleniach</li>
        <li>Poczucie przynależności</li>
        <li>Dowolność wyboru zadań</li>
      </ul>
      <p class='text-justify mt-2'>
        Będąc w&nbsp;zespole, zyskasz możliwość tworzenia gier komputerowych i&nbsp;brania udziału w&nbsp;innych,
        ciekawych projektach. Jeśli nie masz doświadczenia bądź dopiero zaczynasz swoją przygodę w&nbsp;gamedevie, z&nbsp;pewnością
        pomogą ciszkolenia organizowane przez naszych mentorów. Członkowie mają realny wpływ na decyzje podejmowane w&nbsp;zespole
        oraz kierunek rozwoju grupy.
      </p>
    </div>
    <div class='d-flex flex-wrap flex-lg-nowrap'>
      <div class='col-lg p-0 pr-lg-4 my-2'>
        <FOSectionTitle content='PRAKTYKANT' />
        <p>
          Będąc w&nbsp;zespole, zyskasz możliwość tworzenia gier komputerowych i&nbsp;brania udziału w&nbsp;innych,
          ciekawych projektach. Jeśli nie masz doświadczenia bądź dopiero zaczynasz swoją przygodę w&nbsp;gamedevie, z&nbsp;pewnością
          pomogą ci szkolenia organizowane przez naszych mentorów. Członkowie mają realny wpływ na decyzje podejmowane w&nbsp;zespole
          oraz kierunek rozwoju grupy. Podsumowując, jeśli szukałeś grupy do wspólnego projektowania gier – jesteś we
          właściwym miejscu.
        </p>
      </div>
      <div class='col-lg pl-lg-4 p-0 my-2'>
        <FOSectionTitle content='PARTNER' />
        <p>
          Będąc w&nbsp;zespole, zyskasz możliwość tworzenia gier komputerowych i&nbsp;brania udziału w&nbsp;innych,
          ciekawych projektach. Jeśli nie masz doświadczenia bądź dopiero zaczynasz swoją przygodę w&nbsp;gamedevie, z&nbsp;pewnością
          pomogą ci szkolenia organizowane przez naszych mentorów. Członkowie mają realny wpływ na decyzje podejmowane w&nbsp;zespole
          oraz kierunek rozwoju grupy. Podsumowując, jeśli szukałeś grupy do wspólnego projektowania gier – jesteś we
          właściwym miejscu.
        </p>
      </div>
    </div>
    <h3 class='font-weight-light fo-pink-text text-center'>Jeśli chcesz zostać członkiem Flying Octopus, skontaktuj się
      z&nbsp;nami!</h3>
    <div class='mx-auto'>
      <h3 class='font-weight-light mb-3'>Wystarczą trzy proste kroki:</h3>
      <ol style='line-height: 2rem'>
        <li><a href='' class='fo-pink-text'>Napisz do nas!</a></li>
        <li>Zrób wyznaczone <span class='fo-pink-text'>zadanie wstępne</span></li>
        <li><span class='fo-pink-text'>Twórz</span> z nami wspaniałe projekty!</li>
      </ol>
    </div>
    <b-link href='' class='fo-gradient-button text-center mx-auto mt-3 py-2 px-4 h4'>Dołącz do nas</b-link>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'
import SectionTitle from '~/components/SectionTitle.vue'

@Component({ components: { FOSectionTitle: SectionTitle } })
export default class JoinUsPage extends Vue {
}
</script>
