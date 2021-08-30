export class Baner {
  bid: string
  url: string
  public constructor(baner = { id: "", url: ""}) {
    this.bid = baner.id
    this.url = baner.url
  }
}
