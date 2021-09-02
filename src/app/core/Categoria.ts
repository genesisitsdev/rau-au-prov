interface ICategoria {
  id: number
  nome: string
  url: string
}

export class Categoria implements ICategoria{
  id: number = 1
  nome: string = ''
  url: string = ''

  constructor(categoriaAbstrata = { id: 1, nome: "", url: ""}) {
    this.id = categoriaAbstrata.id
    this.nome = categoriaAbstrata.nome
    this.url = categoriaAbstrata.url
  }
}
