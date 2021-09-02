
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoDetalhe } from 'src/app/Components/produto-detalhe/ProdutoDetalhe';
import { CarrinhoDeCompra } from 'src/app/core/CarrainhoDeCompra';
@Component({
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  public title: string = "Carrinho"
  public produto: any;
  public carrinho: CarrinhoDeCompra
  public categoria: string = "carrinho"


  constructor(private router: Router, private route: ActivatedRoute) {

    this.carrinho = new CarrinhoDeCompra

    this.produto = new ProdutoDetalhe();
    this.produto.mockDetahle()

  }

  ngOnInit() {
    //this.produto = this.router.getCurrentNavigation().extras.state
    this.carrinho.addProduto(this.produto)
    this.carrinho.totalizacao()
  }

  changeProduto(produto: ProdutoDetalhe) {
    this.carrinho.totalizacao()
    console.log("Produto: ", produto)
  }

  public checkout(carrinho: CarrinhoDeCompra) {
    this.router.navigate(['/meio-pagamento', { carrinho }]);
    console.log("Carrinho: ", carrinho)
  }
}
