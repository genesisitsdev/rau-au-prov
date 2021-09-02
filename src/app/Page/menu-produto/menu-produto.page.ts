import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FactoryProduto as Produto } from 'src/app/Components/produto/Fatory.Produto';

import { PromoMockService } from 'src/app/Services/mock/promo.mock.service';


@Component({
  selector: 'app-menu-produto',
  templateUrl: './menu-produto.page.html',
  styleUrls: ['./menu-produto.page.scss'],
})
export class MenuProdutoPage implements OnInit {
  public title: string
  public categoria: any
  public produtos: Produto[] = []
  public baners: any[] = []

  public slideOpts: any = {
    initialSlide: 1,
    speed: 400,
  };

  constructor(private route: ActivatedRoute, private router: Router) {

    this.baners = PromoMockService.get()
    let prod = new Produto
    prod.mock()

    this.produtos.push(prod)
    this.produtos.push(prod)
    this.produtos.push(prod)
    this.produtos.push(prod)
  }

  ngOnInit() {
    this.categoria = this.router.getCurrentNavigation().extras.state
    this.title = this.categoria.nome
  }

  public changeProduto(produto: Produto) {
    this.router.navigateByUrl('/produto', { state: produto})
    console.log("Change Produto: ", produto)
  }

  public changeBaner(baner: any) {
    this.router.navigateByUrl('/home', { state: baner})
    console.log("change Baner: ", baner)
  }
}
