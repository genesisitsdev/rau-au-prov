import { Component, OnInit } from '@angular/core';
import { ProdutoDetalhe } from 'src/app/Components/produto-detalhe/ProdutoDetalhe';
import { FactoryProduto } from 'src/app/Components/produto/Fatory.Produto';
import { Produto } from 'src/app/Components/produto/Produto';
@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  produtoComponent: any;

  public produto: ProdutoDetalhe

  public produtos: FactoryProduto[] = []

  constructor() {
    this.produto = new ProdutoDetalhe
    this.produto.mockDetahle()

    let prod = new FactoryProduto
    prod.mock()
    this.produtos.push(prod)
    this.produtos.push(prod)
    this.produtos.push(prod)
  }

  ngOnInit() {}

  public changeProdutoDetalhe(produto: ProdutoDetalhe) {
    this.produtoComponent = produto
  }

  public changeProdutoComprado(produto: Produto) {
    console.log("Produto Conprado: ", produto)
  }

  public comprarProduto(produto: ProdutoDetalhe) {
    console.log("Comprar Produto: ", produto)
  }
}
