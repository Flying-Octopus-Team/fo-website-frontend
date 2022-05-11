class MainCarousel {
  name: string
  image: string
  order: number
  project: string
  external: boolean
  link: string

  constructor(name: string, image: string, order: number, project: string, external: boolean, link: string) {
    this.name = name
    this.image = image
    this.order = order
    this.project = project
    this.external = external
    this.link = link
  }
}

export default MainCarousel
