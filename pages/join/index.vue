<template>
  <div class='d-flex flex-column fo-subpage-container mx-3 my-5'>
    <b-img-lazy fluid class='mx-auto mb-3' src='~/assets/img/fo-icon.svg' alt='Flying Octopus' />
    <h1 class='text-center mb-5'>
      Co zyskujesz będąc w zespole?
    </h1>
    <FOSectionTitle content='CZŁONEK' class='my-3' />
    <div class='d-flex flex-wrap flex-lg-nowrap'>
      <ul
        class='h5 font-weight-light fo-checkmarks-list text-nowrap px-0 ml-2 mr-lg-4 mb-4 mb-lg-0'
        style='line-height: 2rem'
      >
        <li>Udział w spotkaniach</li>
        <li>Wpływ na decyzje</li>
        <li>Udział w szkoleniach</li>
        <li>Poczucie przynależności</li>
        <li>Dowolność wyboru zadań</li>
      </ul>
      <div class='text-justify ml-lg-4 fo-post-content' v-html='renderMarkdownContent(memberContent)'></div>
    </div>
    <div class='d-flex flex-wrap flex-lg-nowrap'>
      <div class='col-lg p-0 pr-lg-4 my-4'>
        <FOSectionTitle class='my-3' content='PRAKTYKANT' />
        <div
          class='text-justify fo-post-content'
          v-html='renderMarkdownContent(fixConjunctions(apprenticeContent))'
        >
        </div>
      </div>
      <div class='col-lg pl-lg-4 p-0 my-4'>
        <FOSectionTitle class='my-3' content='PARTNER' />
        <div class='text-justify fo-post-content' v-html='renderMarkdownContent(fixConjunctions(partnerContent))'>
        </div>
      </div>
    </div>
    <h3 id='contact' class='font-weight-light fo-pink-text text-center my-4'>
      Jeśli chcesz zostać członkiem Flying Octopus, skontaktuj się z&nbsp;nami!
    </h3>
    <div class='mx-auto'>
      <h3 class='font-weight-light my-2'>Wystarczą trzy proste kroki:</h3>
      <ol class='my-4' style='line-height: 2rem'>
        <li><a href='https://discord.gg/Q2DuSNY' class='fo-pink-text'>Napisz do nas!</a></li>
        <li>Wypełnij <a href='https://wiki.flyingoctopus.pl/Rekrutacja' class='fo-pink-text'>formularz rekrutacyjny</a></li>
        <li>Wykonaj zadanie wstępne i twórz z nami wspaniałe projekty!</li>
      </ol>
    </div>
    <b-link
      href='https://wiki.flyingoctopus.pl/bin/view/Rekrutacja/'
      class='fo-gradient-button text-center mx-auto my-3 py-2 px-4 h5 font-weight-normal'
    >
      Dołącz do nas
    </b-link>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'
import { marked } from 'marked'
import { FetchReturn } from '@nuxt/content/types/query-builder'
import SectionTitle from '~/components/SectionTitle.vue'
import JoinPageContent from '~/types/JoinPageContent'
import TextUtil from '~/services/TextUtil'
import JoinSection from '~/types/JoinSection'

@Component({ components: { FOSectionTitle: SectionTitle } })
export default class JoinUsPage extends Vue {

  contents: JoinPageContent[] = []
  memberContent: string = '<p></p>'
  apprenticeContent: string = '<p></p>'
  partnerContent: string = '<p></p>'

  async fetch() {
    this.contents = JoinUsPage.handleFetchedDataAsArray<JoinPageContent>(
      await this.$content('join-page')
        .fetch<JoinPageContent>()
    )

    this.memberContent = this.contents.find(ctn => ctn.section === JoinSection.MEMBER)!.content
    this.apprenticeContent = this.contents.find(ctn => ctn.section === JoinSection.APPRENTICE)!.content
    this.partnerContent = this.contents.find(ctn => ctn.section === JoinSection.PARTNER)!.content
  }

  public renderMarkdownContent(description: string): string {
    return marked(description)
  }

  public fixConjunctions(text: string) {
    return TextUtil.fixHangingConjunctions(text)
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
