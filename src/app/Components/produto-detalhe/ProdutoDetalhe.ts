import { FactoryProduto  } from '../produto/Fatory.Produto'

interface IProdutoDetalhe {
  carrosselDelUrls: string[];
  posicaoNoRanking: number;
  nivelDeSatiafacao: number // de 0 a 5 estrelas
  numeroDeAvaliacoes: number
  tipoDeFrete: string
  valorDoFrete: number
  toggleFavorito()
}

export class ProdutoDetalhe extends FactoryProduto implements IProdutoDetalhe{

  carrosselDelUrls: string[] = []
  posicaoNoRanking: number = 0
  nivelDeSatiafacao: number = 0 // de 0 a 5 estrelas
  numeroDeAvaliacoes: number = 0
  tipoDeFrete: string = 'Grátis'
  valorDoFrete: number = 0

  public constructor(produtoDetalheAbstrato = {
    categorias: [''],
    favorito: false,
    descricao: '',
    carrossel: [''],
    ranking: 0,
    satisfacao: 0,
    avaliacoes: 0,
    tipoDeFrete: 'Grátis',
    valorDoFrete: 0
  }) {
    super(produtoDetalheAbstrato)
    this.carrosselDelUrls = produtoDetalheAbstrato.carrossel
    this.posicaoNoRanking = produtoDetalheAbstrato.ranking
    this.nivelDeSatiafacao = produtoDetalheAbstrato.satisfacao
    this.numeroDeAvaliacoes = produtoDetalheAbstrato.avaliacoes
    this.tipoDeFrete = produtoDetalheAbstrato.tipoDeFrete
    this.valorDoFrete = produtoDetalheAbstrato.valorDoFrete
  }


}
