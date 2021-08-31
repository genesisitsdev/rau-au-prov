import { Component, Input, OnInit } from '@angular/core'
import { ProdutoDetalhe } from './ProdutoDetalhe';

@Component({
  selector: "produto-detalhe-component",
  templateUrl: "./produto.detalhe.component.html",
  styleUrls: ['./produto.detalhe.component.scss']
})

export class ProdutoDetalheComponent implements OnInit {

  @Input() set produto(prod: any) {
    this.produtoComponent = new ProdutoDetalhe(prod)
  }

  public produtoComponent: ProdutoDetalhe

  public detalhes: any = {
    avaliacoes: "3012 Avalições"
  }

  public slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  public ngOnInit() {

  }
}
