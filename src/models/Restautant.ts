class Restaurant {
  id: number
  title: string
  image: string
  hating: string
  description: string
  infos: string[]

  constructor(
    id: number,
    title: string,
    image: string,
    hating: string,
    description: string,
    infos: string[]
  ) {
    this.id = id
    this.title = title
    this.image = image
    this.hating = hating
    this.description = description
    this.infos = infos
  }
}

export default Restaurant
