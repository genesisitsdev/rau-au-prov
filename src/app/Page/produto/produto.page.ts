import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  public produto: any = {
    id:1,
    nome:'Ração Golden Special Sabor Frango e Carne ',
    marca:'Premier Pet',
    tipo:'Golden',
    preco:'R$ 132,99',
    desconto: 'R$ 18,00',
    img:'../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png',
    categoria: "Golden",
    carrossel: [
      "../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png",
      "../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png",
      "../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png",
      "../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png",
      "../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png",
      "../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png"
    ]
  }

  constructor() {
  }

  ngOnInit() {
  }

}
