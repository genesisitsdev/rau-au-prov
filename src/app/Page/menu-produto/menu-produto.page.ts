import { Component, OnInit } from '@angular/core';
import { FactoryProduto } from 'src/app/Components/produto/Fatory.Produto';

@Component({
  selector: 'app-menu-produto',
  templateUrl: './menu-produto.page.html',
  styleUrls: ['./menu-produto.page.scss'],
})
export class MenuProdutoPage implements OnInit {
  public produtos: FactoryProduto[] = []

  public baners: any[] = [
    { id: 'asdas', url: '../../../assets/img/rauau/promo/baner-cao.PNG' },
    { id: '123', url: '../../../assets/img/rauau/promo/baner-cao.PNG' },
  ];

  public slideOpts: any = {
    initialSlide: 1,
    speed: 400,
  };

  constructor() {
    let prod = new FactoryProduto
    prod.mock()

    this.produtos.push(prod)
    this.produtos.push(prod)
    this.produtos.push(prod)
    this.produtos.push(prod)
  }

  ngOnInit() {}

  public changeProduto(produto: any) {
    console.log("Change Produto: ", produto)
  }

  public changeBaner(baner: any) {
    console.log("change Baner: ", baner)
  }
}
