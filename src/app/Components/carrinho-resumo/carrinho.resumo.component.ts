import { Component, Input, OnInit } from "@angular/core";


@Component({
  selector: "carrinho-resumo-component",
  templateUrl: "./carrinho.resumo.component.html",
  styleUrls:[ './carrinho.resumo.component.scss']
})

export class CarrinhoResumoComponent implements OnInit {

  @Input() carrinho: any

  ngOnInit() {}
}
