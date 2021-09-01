import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

export interface Produto {
  id: number;
  nome: string;
  imagem: string;
  preco: number;
  quantidade: number;
}

@Component({
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss']
})
export class CarrinhoPage implements OnInit {
  public precoTotal = 0;
  public produtos: Produto[] = [
    {
      id: 1,
      nome: 'Ração 1',
      imagem: '../../assets/img/rauau/Produtos/racao1.png',//../../assets/img/rauau/racao1.png
      preco: 5.00,
      quantidade: 1
    },
    {
      id: 2,
      nome: 'Ração 2',
      imagem: '../../assets/img/rauau/Produtos/racao1.png',//../../assets/img/rauau/racao1.png
      preco: 10.00,
      quantidade: 1
    },
  ];

  constructor(private route: ActivatedRoute, private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.produtos.map(p => {
      this.atualizaPreco(p);
    });
  }

  atualizaPreco(produto: Produto) {
    this.precoTotal += (produto.preco * produto.quantidade);
  }

  adicionar(produto: Produto): void {
    produto.quantidade += 1;
    this.atualizaPreco(produto);
  }

  async remover(produto: Produto) {
    if (produto.quantidade === 1) {
      console.log('Quer remover', produto.quantidade);
      await this.confirmaExclusao(produto);
    } else {
      produto.quantidade -= 1;
    }
    this.atualizaPreco(produto);
  }

  async confirmaExclusao(produto: Produto): Promise<any> {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Não excluiu produto', blah);
          }
        }, {
          text: 'Okay',
          handler: (bleh) => {
            this.excluirProdutoLista(produto);
            console.log('Excluiu produto', bleh);
          }
        }
      ]
    });
  }

  excluirProdutoLista(produto: Produto): void {
    this.produtos = [...this.produtos.filter(p => p.id !== produto.id)];
  }


}
