import { ProdutoDetalhe } from '../Components/produto-detalhe/ProdutoDetalhe'

export class CarrinhoDeCompra {

  public limit: number = 1000
  public subtotal: number = 0
  public total: number = 10
  public desconto: number = 0
  public valorDoFrete: number = 0
  public parcelas: number = 6
  public parcela: number = 0

  public produtoCorrente: ProdutoDetalhe

  public produtos: ProdutoDetalhe[] = []


  public addProduto(produto: ProdutoDetalhe) {
    this.produtos.push(produto)
  }

  public removerProduto(produto: ProdutoDetalhe) {
    this.produtos = this.produtos.filter((prod: ProdutoDetalhe)=> {
      return (prod.id != produto.id)
    })
  }

  public totalizacao() {

    this.produtos.forEach((produto: ProdutoDetalhe)=> {
      this.subtotal =+ produto.subTotal
      this.valorDoFrete = produto.valorDoFrete
    })

    this.total = Number((this.subtotal + this.valorDoFrete).toFixed(2))

    this.parcela = Number((this.total / this.parcelas).toFixed(2))

    if(this.total < 0 ) {
      this.total = 0
    }
  }

  public calcParcela(parcelas: number) {
    this.parcelas = parcelas
    return this.parcela = (this.total /  parcelas)
  }

}
