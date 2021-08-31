interface IProduto {
  pid: string;
  nome: string;
  marca: string;
  preco: string;
  desconto: string;
  imagemUrl: string;
  categoriaCorrente: string
  favorito: boolean
}

export class Produto implements IProduto {
  pid: string;
  nome: string;
  marca: string;
  preco: string;
  desconto: string;
  imagemUrl: string;
  categoriaCorrente: string
  favorito: boolean = false

  public constructor(produtoAbstrato: any = { id: '', nome: '', marca: '', preco: '', desconto: '', img: '', categoria: '', favorito: false}) {
    this.pid = produtoAbstrato.id
    this.nome = produtoAbstrato.nome
    this.marca = produtoAbstrato.marca
    this.preco = produtoAbstrato.preco
    this.desconto = produtoAbstrato.desconto
    this.imagemUrl = produtoAbstrato.img
    this.categoriaCorrente = produtoAbstrato.categoria
    this.favorito = produtoAbstrato.favorito
  }
}
export class FactoryProduto extends Produto {
  categorias: string[];
  categoriaCorrente: string;
  foiFavoritado: boolean;
}
