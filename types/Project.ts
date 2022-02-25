class Project {
  title: string;
  images: Array<string>;
  tags: Array<string>;
  link: string;
  description: string;

  constructor(title: string, images: Array<string>, tags: Array<string>, link: string, description: string) {
    this.title = title
    this.images = images
    this.tags = tags
    this.link = link
    this.description = description
  }
}
export default Project
