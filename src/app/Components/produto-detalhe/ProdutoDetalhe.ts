import { FactoryProduto } from '../produto/Produto'

interface IProdutoDetalhe {
  carrossel: string[];
  ranking: string;
  descricao: string;
}

export class ProdutoDetalhe extends FactoryProduto implements IProdutoDetalhe {

  public constructor(detalhe = { carrossel: [], ranking: "", descricao: ""}) {
    super(detalhe)
    this.carrossel = detalhe.carrossel
    this.ranking = detalhe.ranking
    this.descricao = detalhe.descricao
  }

  carrossel: string[];
  ranking: string;
  descricao: string;
}
