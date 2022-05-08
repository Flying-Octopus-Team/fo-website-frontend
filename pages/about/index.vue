<template>
  <div class='d-flex flex-column fo-subpage-container'>
    <h1 class='text-center my-5'>Więcej o nas</h1>
    <p class='text-center mx-md-5 fo-post-content'>
      Jesteśmy demokratycznym zespołem gamedevowym, który składa się z&nbsp;kilkunastu osób pragnących rozwijać swoje
      umiejętności w&nbsp;zakresie tworzenia gier komputerowych oraz wspólnie pracować nad różnymi projektami. W&nbsp;ramach
      Flying Octopus tworzymy wspólnotę, angażując się w&nbsp;projekty oraz chętnie nawiązując współpracę z&nbsp;innymi
      twórcami i&nbsp;organizacjami.
    </p>
    <FOSectionTitle class='my-2 my-md-4' content='NASZE WARTOŚCI' />
    <div class='d-flex flex-row flex-wrap flex-lg-nowrap'>
      <div class='mr-lg-2'>
        <h1 class='font-weight-light fo-pink-text text-nowrap'>Samorealizacja</h1>
        <p class='text-justify fo-post-content'>
          Flying Octopus pozwala kreatywnie rozwijać się w&nbsp;wielu kierunkach. Członkowie grupy chętnie dzielą się ze
          sobą wiedzą, organizują szkolenia, wspólnie doskonalą swoje umiejętności.
        </p>
      </div>
      <div class='mx-lg-3'>
        <h1 class='font-weight-light fo-pink-text text-nowrap'>Autonomia</h1>
        <p class='text-justify fo-post-content'>
          Każdy członek indywidualnie decyduje o&nbsp;tym, w&nbsp;czym bierze udział i&nbsp;jakie ma miejsce w&nbsp;grupie.
          Członkowie zespołu mają wpływ na rozwój projektów, w&nbsp;których biorą udział, a&nbsp;także rozpoczynają nowe
          inicjatywy.
        </p>
      </div>
      <div class='ml-lg-2'>
        <h1 class='font-weight-light fo-pink-text text-nowrap'>Poczucie wspólnoty</h1>
        <p class='text-justify fo-post-content'>
          Dążymy do bycia grupą, w&nbsp;której każdy czuje się dobrze. Pracujemy w&nbsp;przyjaznej atmosferze. Wspieramy
          się i&nbsp;rozmawiamy ze sobą, stawiając na komunikację oraz konstruktywną, wrażliwą wymianę poglądów.
        </p>
      </div>
    </div>
    <div class='d-flex flex-row flex-wrap flex-md-nowrap my-md-4'>
      <div class='col-md my-2 my-md-0 p-0 pr-md-2'>
        <FOSectionTitle class='mb-2' content='MISJA' />
        <p class='text-justify fo-post-content'>
          Rozwijamy swoje umiejętności w&nbsp;kreatywnym, zaangażowanym zespole, w&nbsp;którym jesteśmy równi. Nie
          zapominamy przy tym o&nbsp;przyjemności płynącej z&nbsp;tworzenia.
        </p>
      </div>
      <div class='col-md my-2 my-md-0 p-0 pl-md-2'>
        <FOSectionTitle class='mb-2' content='WIZJA' />
        <p class='text-justify fo-post-content'>
          Chcemy w&nbsp;kreatywnym i&nbsp;egalitarnym zespole rozwijać inspirujące projekty, które staną się dla nas
          źródłem zarobku.
        </p>
      </div>
    </div>
    <b-link href='' class='fo-gradient-button text-center my-4 py-2 px-4 h5 font-weight-normal'>ZASOBY</b-link>
    <div class='my-4'>
      <h1 class='text-center fo-main-text m-4'>Nasz zespół</h1>
      <OurTeam :members='activeTeamMembers' />
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'
import SectionTitle from '~/components/SectionTitle.vue'
import Member from '~/types/Member'
import { FetchReturn } from '@nuxt/content/types/query-builder'

@Component({ components: { FOSectionTitle: SectionTitle } })
export default class AboutUsPage extends Vue {

  activeTeamMembers: Member[] = []

  async fetch() {

    this.activeTeamMembers = AboutUsPage.handleFetchedDataAsArray<Member>(
      await this.$content('member')
        .where({ active: true })
        .fetch<Member>()
    )

    this.activeTeamMembers = this.activeTeamMembers.sort((a, b) => a.name.localeCompare(b.name, 'pl'))
  }

  private static handleFetchedDataAsArray<T>(data: (T & FetchReturn) | (T & FetchReturn)[]): T[] {
    if (Array.isArray(data)) {
      return data
    } else {
      return [data]
    }
  }
}
</script>
