import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-produto',
  templateUrl: './menu-produto.page.html',
  styleUrls: ['./menu-produto.page.scss'],
})
export class MenuProdutoPage implements OnInit {
  public produtos: any = [
    {
      id: 1,
      nome: 'Ração Golden Special Sabor Frango e Carne ',
      marca: 'Premier Pet',
      tipo: 'Golden',
      preco: 'R$ 132,99',
      desconto: 'R$ 18,00',
      img: '../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png',
      categoria: 'Golden',
    },
    {
      id: 1,
      nome: 'Ração Golden Special Sabor Frango e Carne ',
      marca: 'Premier Pet',
      tipo: 'Golden',
      preco: 'R$ 132,99',
      desconto: 'R$ 18,00',
      img: '../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png',
    },
    {
      id: 1,
      nome: 'Ração Golden Special Sabor Frango e Carne ',
      marca: 'Premier Pet',
      tipo: 'Golden',
      preco: 'R$ 132,99',
      desconto: 'R$ 18,00',
      img: '../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png',
    },
    {
      id: 1,
      nome: 'Ração Golden Special Sabor Frango e Carne ',
      marca: 'Premier Pet',
      tipo: 'Golden',
      preco: 'R$ 132,99',
      desconto: 'R$ 18,00',
      img: '../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png',
    },
  ];

  public baners: any[] = [
    { id: 'asdas', url: '../../../assets/img/rauau/promo/baner-cao.PNG' },
    { id: '123', url: '../../../assets/img/rauau/promo/baner-cao.PNG' },
  ];

  public slideOpts: any = {
    initialSlide: 1,
    speed: 400,
  };

  constructor() {}

  ngOnInit() {}
}
