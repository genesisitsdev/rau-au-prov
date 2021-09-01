import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'
import { ProdutoDetalhe } from './ProdutoDetalhe';

@Component({
  selector: "produto-detalhe-component",
  templateUrl: "./produto.detalhe.component.html",
  styleUrls: ['./produto.detalhe.component.scss']
})

export class ProdutoDetalheComponent implements OnInit {

  @Input() set produto(prod: any) {
    this.produtoComponent = new ProdutoDetalhe(prod)
    this.changeProduto.emit(this.produtoComponent)
  }

  @Output() changeProduto = new EventEmitter<ProdutoDetalhe>()

  public produtoComponent: ProdutoDetalhe

  public slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  public ngOnInit() {}

  favoritarProduto(produto: ProdutoDetalhe) {
    produto.toggleFavorito()
    this.changeProduto.emit(produto)
    console.log("Produto favorito: ", produto)
  }

  addCarrinho(produto: ProdutoDetalhe) {
    this.changeProduto.emit(produto)
    console.log("Produto ADD carrinho: ", produto)
  }

}
