import { Preco } from '../../core/Preco';

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

interface IProdutoDetalhe {
  carrossel: string[];
  ranking: string;
  descricao: string;
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

export class FactoryProduct extends Produto {
  categorias: string[];
  categoriaCorrente: string;
  foiFavoritado: boolean;
}

export class ProdutoDetalhe extends FactoryProduct implements IProdutoDetalhe {
  carrossel: string[];
  ranking: string;
  descricao: string;
}
