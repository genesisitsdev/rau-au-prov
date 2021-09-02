import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoDetalhe } from 'src/app/Components/produto-detalhe/ProdutoDetalhe';
import { CarrinhoDeCompra } from 'src/app/core/CarrainhoDeCompra';
@Component({
  selector: 'app-meio-pagamento',
  templateUrl: './meio-pagamento.page.html',
  styleUrls: ['./meio-pagamento.page.scss'],
})
export class MeioPagamentoPage implements OnInit {

  public produto: ProdutoDetalhe;
  public carrinho: CarrinhoDeCompra
  public categoria: string = "Pagamento"

  constructor(private router: Router, private route: ActivatedRoute) {

    this.carrinho = new CarrinhoDeCompra

    this.produto = new ProdutoDetalhe();
    this.produto.mockDetahle()
    this.carrinho.addProduto(this.produto)
    this.carrinho.totalizacao()
   }

  ngOnInit() {
  }

  changeProduto(produto: ProdutoDetalhe) {
    this.carrinho.totalizacao()
    console.log("Produto: ", produto)
  }

  public checkout(carrinho: CarrinhoDeCompra) {
    this.router.navigate(['/pedido', { carrinho }]);
    console.log("Carrinho: ", carrinho)
  }

}
