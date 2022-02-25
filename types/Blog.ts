class Blog {
  title: string;
  date: string;
  thumbnail: string;
  description: string;
  author: string;
  content: string;

  constructor(title: string, date: string, thumbnail: string, description: string, author: string, content: string) {
    this.title = title
    this.date = date
    this.thumbnail = thumbnail
    this.description = description
    this.author = author
    this.content = content
  }
}
export default Blog
