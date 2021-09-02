import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoDetalhe } from 'src/app/Components/produto-detalhe/ProdutoDetalhe'
import { CarrinhoDeCompra } from 'src/app/core/CarrainhoDeCompra';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss'],
})

export class PedidoComponent implements OnInit {
  public title: string = "Pedido"

  public produto: ProdutoDetalhe;
  public carrinho: CarrinhoDeCompra

  constructor(private router: Router, private route: ActivatedRoute) {

    this.carrinho = new CarrinhoDeCompra

    this.produto = new ProdutoDetalhe();
    this.produto.mockDetahle()
    this.carrinho.addProduto(this.produto)
    this.carrinho.totalizacao()
   }

  ngOnInit() {
    this.title = "Pedido"
  }

  changeProduto(produto: ProdutoDetalhe) {
    //this.carrinho.totalizacao()
    console.log("Pedido: ", produto)
  }

  public checkout(carrinho: CarrinhoDeCompra) {
    this.router.navigate(['/home', { carrinho }]);
    console.log("Carrinho: ", carrinho)
  }


}
