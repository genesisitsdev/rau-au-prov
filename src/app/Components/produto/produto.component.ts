import { Component, OnInit, Input } from '@angular/core';
import { Produto } from './Produto'

@Component({
  selector: 'produto-component',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
})

export class ProdutoComponent implements OnInit {

  @Input() set produto(prod) {
    if(prod) {
      this.produtoComponent=  new Produto(prod)
    }
  }

  public produtoComponent: Produto

  constructor() {
  }

  ngOnInit() {
  }



}
