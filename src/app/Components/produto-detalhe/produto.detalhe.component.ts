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
    console.log("Produto detalhe: ", this.produtoComponent)
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
    this.produto.togglefavorito()
    this.changeProduto.emit(produto)
  }
}
