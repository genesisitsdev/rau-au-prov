import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoDetalhe } from 'src/app/Components/produto-detalhe/ProdutoDetalhe';
import { Produto } from 'src/app/Components/produto/Produto';
import { CarrinhoService } from 'src/app/Services/Database/carrinho.service';
@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  produtoComponent: any;

  public produto: any = {
    id: 1,
    nome: 'Ração Golden Special Sabor Frango e Carne ',
    marca: 'Premier Pet',
    tipo: 'Golden',
    preco: 'R$ 132,99',
    desconto: 'R$ 18,00',
    img: '../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png',
    categoria: 'Golden',
    carrossel: [
      '../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png',
      '../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png',
      '../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png',
      '../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png',
      '../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png',
      '../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png',
    ],
    tipoDeFrete: 'Grátis',
    ranking: 1,
    favorito: false,
    satisfacao: 2,
    avaliacoes: 2000,
  };

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

  constructor(private carrinhoService: CarrinhoService, private router: Router) {}

  ngOnInit() {}

  public changeProdutoDetalhe(produto: ProdutoDetalhe) {
    this.produtoComponent = produto;
  }

  public changeProdutoComprado(produto: Produto) {
    console.log('Produto Conprado: ', produto);
  }

  public comprarProduto(produto: ProdutoDetalhe) {
    this.carrinhoService.addProduto(produto);
    console.log('Produto add no carrinho.');
    this.router.navigate(['/carrinho']);
  }
}
