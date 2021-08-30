import { Component, OnInit } from '@angular/core';
import { Produto } from '../../Components/produto/Produto'

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  constructor() {
    let p = new Produto()
    p.nome = "teste"
    console.log("Produto: ", p)
  }

  ngOnInit() {
  }

}
