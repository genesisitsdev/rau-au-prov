import { FactoryProduto  } from '../produto/Fatory.Produto'

interface IProdutoDetalhe {
  carrosselDelUrls: string[];
  posicaoNoRanking: number;
  nivelDeSatiafacao: number // de 0 a 5 estrelas
  numeroDeAvaliacoes: number
  tipoDeFrete: string
  valorDoFrete: number
  quantidade: number
  toggleFavorito()
}

export class ProdutoDetalhe extends FactoryProduto implements IProdutoDetalhe{

  carrosselDelUrls: string[] = []
  posicaoNoRanking: number = 0
  nivelDeSatiafacao: number = 0 // de 0 a 5 estrelas
  numeroDeAvaliacoes: number = 0
  tipoDeFrete: string = 'Grátis'
  valorDoFrete: number = 0
  quantidade: number = 1

  public constructor(produtoDetalheAbstrato = {
    categorias: [''],
    favorito: false,
    descricao: '',
    carrossel: [''],
    ranking: 0,
    satisfacao: 0,
    avaliacoes: 0,
    tipoDeFrete: 'Grátis',
    valorDoFrete: 0,
    quantidade: 1
  }) {
    super(produtoDetalheAbstrato)
    this.carrosselDelUrls = produtoDetalheAbstrato.carrossel
    this.posicaoNoRanking = produtoDetalheAbstrato.ranking
    this.nivelDeSatiafacao = produtoDetalheAbstrato.satisfacao
    this.numeroDeAvaliacoes = produtoDetalheAbstrato.avaliacoes
    this.tipoDeFrete = produtoDetalheAbstrato.tipoDeFrete
    this.valorDoFrete = produtoDetalheAbstrato.valorDoFrete
    this.quantidade = produtoDetalheAbstrato.quantidade
  }

  public mockDetahle() {
    this.mock()

  this.carrosselDelUrls = [
    '../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png',
    '../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png',
    '../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png',
    '../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png',
    '../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png',
    '../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png',
  ]

  this.posicaoNoRanking = 1
  this.nivelDeSatiafacao = 2
  this.numeroDeAvaliacoes = 3012
  this.tipoDeFrete = 'Grátis'
  this.valorDoFrete = 0
  this.quantidade = 1

  }


}
