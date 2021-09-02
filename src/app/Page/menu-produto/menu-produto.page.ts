import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FactoryProduto } from 'src/app/Components/produto/Fatory.Produto';


@Component({
  selector: 'app-menu-produto',
  templateUrl: './menu-produto.page.html',
  styleUrls: ['./menu-produto.page.scss'],
})
export class MenuProdutoPage implements OnInit {
  public categoria: any
  public produtos: FactoryProduto[] = []

  public baners: any[] = [
    { id: 'asdas', url: '../../../assets/img/rauau/promo/baner-cao.PNG' },
    { id: '123', url: '../../../assets/img/rauau/promo/baner-cao.PNG' },
  ];

  public slideOpts: any = {
    initialSlide: 1,
    speed: 400,
  };

  constructor(private route: ActivatedRoute, private router: Router) {
    let prod = new FactoryProduto
    prod.mock()

    this.produtos.push(prod)
    this.produtos.push(prod)
    this.produtos.push(prod)
    this.produtos.push(prod)

    console.log("menu-produto", this.produtos)
  }

  ngOnInit() {
    this.categoria = this.route.snapshot.paramMap.get('idSubCategoria');
    console.log('Menu Produto/subcategoria: ', this.categoria);
  }

  public changeProduto(produto: any) {
    this.router.navigate(['/produto', { produto }]);
    console.log("Change Produto: ", produto)
  }

  public changeBaner(baner: any) {
    this.router.navigate(['/home', { baner }]);
    console.log("change Baner: ", baner)
  }
}
