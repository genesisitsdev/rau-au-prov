interface IProduto {
  id: string;
  nome: string;
  marca: string;
  tipo: string
  preco: number;
  desconto: number;
  img: string;
  categoria: string
}

export class Produto implements IProduto {
  id: string;
  nome: string;
  marca: string;
  tipo: string
  preco: number;
  desconto: number;
  img: string;
  categoria: string

  public constructor(produtoAbstrato: any = {
    id: '',
    nome: '',
    marca: '',
    tipo: '',
    preco: 0,
    desconto: 0,
    img: '',
    categortia: '',

  }) {
    this.id = produtoAbstrato.id
    this.nome = produtoAbstrato.nome
    this.marca = produtoAbstrato.marca
    this.tipo = produtoAbstrato.tipo
    this.preco = produtoAbstrato.preco
    this.desconto = produtoAbstrato.desconto
    this.img = produtoAbstrato.img
    this.categoria = produtoAbstrato.categoria
  }

  private load() {
  }
}
