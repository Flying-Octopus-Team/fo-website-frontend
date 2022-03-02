<template>
  <div class='d-flex flex-column fo-subpage-container mx-3'>
    <h1 class='text-center my-5'>Więcej o nas</h1>
    <p class='text-center'>
      Jesteśmy demokratycznym zespołem gamedevowym, który składa się z kilkunastu osób pragnących rozwijać swoje
      umiejętności w zakresie tworzenia gier komputerowych oraz wspólnie pracować nad kilkoma kreatywnymi projektami.
      Wartościami budującymi tożsamość Flying Octopus są: autonomia, samorealizacja, kultura i poczucie wspólnoty. Są
      one podstawą do podejmowania wszystkich działań w obrębie grupy. O czym mówi autonomia? Wszyscy członkowie Flying
      Octopus są sobie równi – posiadają takie same prawa i obowiązki. Członkowie zespołu mają wpływ na rozwój
      projektów, w których biorą udział, a także rozpoczynają nowe inicjatywy. Samorealizacja umożliwia nam dzielenie
      się ze sobą wiedzą. Są organizowane szkolenia i wspólnie doskonalimy swoje umiejętności w danych dziedzinach.
      Uznajemy wkład naszych członków oraz ich rolę w realizacji danego projektu. W kwestii kultury - dążymy do bycia
      grupą, w której każdy czuje się dobrze. Nie obrażamy innych, nie stosujemy żadnych form nacisku czy przemocy
      słownej. Wspieramy się i rozmawiamy ze sobą, stawiając na komunikację oraz konstruktywną, wrażliwą wymianę
      poglądów.
      W ramach Flying Octopus tworzymy wspólnotę, angażując się w swoje projekty oraz chętnie nawiązując współpracę z
      innymi twórcami i organizacjami. Bierzemy udział w inicjatywach z zewnątrz.
    </p>
    <FOSectionTitle class='my-5' content='Nasze Wartości' />
    <div class='d-flex flex-row flex-wrap'>
      <div>
        <h1 class='font-weight-light fo-pink-text'>Samorealizacja</h1>
        <p class='text-justify'>
          Flying Octopus pozwala kreatywnie rozwijać
          się w wielu kierunkach. Członkowie grupy
          chętnie dzielą się ze sobą wiedzą, organizują szkolenia, wspólnie doskonalą swoje
          umiejętności.
        </p>
      </div>
      <div>
        <h1 class='font-weight-light fo-pink-text'>Autonomia</h1>
        <p class='text-justify'>
          Każdy członek indywidualnie decyduje o tym,
          w czym bierze udział i jakie ma miejsce w grupie. Członkowie zespołu mają wpływ na rozwój projektów, w których
          biorą udział, a także
          rozpoczynają nowe inicjatywy.
        </p>
      </div>
      <div>
        <h1 class='font-weight-light fo-pink-text'>Poczucie wspólnoty</h1>
        <p class='text-justify'>
          Dążymy do bycia grupą, w której każdy czuje się dobrze. Pracujemy w przyjaznej atmosferze. Wspieramy się i
          rozmawiamy ze sobą, stawiając na komunikację oraz konstruktywną, wrażliwą wymianę poglądów.
        </p>
      </div>
    </div>
    <div class='d-flex flex-row flex-wrap'>
      <div class='d-flex flex-column my-2'>
        <FOSectionTitle content='Misja' />
        <p>
          Rozwijamy swoje umiejętności w kreatywnym, zaangażowanym zespole, w którym jesteśmy równi. Nie zapominamy
          przy tym o przyjemności płynącej z tworzenia.
        </p>
      </div>
      <div class='d-flex flex-column my-2'>
        <FOSectionTitle content='Wizja' />
        <p>
          Chcemy w kreatywnym i egalitarnym zespole rozwijać inspirujące projekty, które staną się dla nas źródłem
          zarobku.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'
import FOSectionTitle from '~/components/FOSectionTitle.vue'

@Component({ components: { FOSectionTitle } })
export default class AboutUsPage extends Vue {
}
</script>
