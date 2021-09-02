import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoDetalhe } from 'src/app/Components/produto-detalhe/ProdutoDetalhe';
import { CarrinhoDeCompra } from 'src/app/core/CarrainhoDeCompra';
@Component({
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  public produto: ProdutoDetalhe;
  public carrinho: CarrinhoDeCompra


  constructor(private route: ActivatedRoute) {

    this.carrinho = new CarrinhoDeCompra

    this.produto = new ProdutoDetalhe();
    this.produto.mockDetahle()
    this.carrinho.addProduto(this.produto)
    this.carrinho.totalizacao()
  }

  ngOnInit() {}

  changeProduto(produto: ProdutoDetalhe) {
    this.carrinho.totalizacao()
    console.log("Produto: ", produto)
  }

  public checkout(carrinho: CarrinhoDeCompra) {
    console.log("Carrinho: ", carrinho)
  }
}
