import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FactoryProduto as Produto } from './Fatory.Produto'

@Component({
  selector: 'produto-component',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
})

export class ProdutoComponent implements OnInit {

  @Input() set produto(prod: Produto) {
    if(prod) {
      this.produtoComponent = prod
    }
  }

  @Output() changeProduto = new EventEmitter<Produto>();

  public produtoComponent: Produto

  constructor() {
  }

  ngOnInit() {
  }

  public selecionarProduto(produto: Produto) {
    this.changeProduto.emit(produto);
    //console.log("Select Produto: ", produto)
  }

  public favoritarProduto(produto: Produto) {
    produto.favorito = !produto.favorito
    this.changeProduto.emit(produto);
    console.log('Favoritar Produto: ', produto);
  }

}
