class Project {
  slug: string
  title: string
  images: string[]
  tags: string[]
  link: string
  linkText: string
  description: string

  constructor(slug: string, title: string, images: Array<string>, tags: Array<string>, link: string, linkText: string, description: string) {
    this.slug = slug
    this.title = title
    this.images = images
    this.tags = tags
    this.link = link
    this.linkText = linkText
    this.description = description
  }
}

export default Project
