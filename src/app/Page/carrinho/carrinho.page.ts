import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProdutoDetalhe } from 'src/app/Components/produto-detalhe/ProdutoDetalhe';
import { CarrinhoService } from 'src/app/Services/Database/carrinho.service';

export interface Produto {
  id: number;
  nome: string;
  imagem: string;
  preco: number;
  quantidade: number;
}

export class Carrinho {
  produtos: ProdutoDetalhe[];
}

@Component({
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss']
})
export class CarrinhoPage implements OnInit {
  public precoTotal = 0;
  // public produtos: Produto[] = [
  //   {
  //     id: 1,
  //     nome: 'Ração 1',
  //     imagem: '../../assets/img/rauau/Produtos/racao1.png',//../../assets/img/rauau/racao1.png
  //     preco: 5.00,
  //     quantidade: 1
  //   },
  //   {
  //     id: 2,
  //     nome: 'Ração 2',
  //     imagem: '../../assets/img/rauau/Produtos/racao1.png',//../../assets/img/rauau/racao1.png
  //     preco: 10.00,
  //     quantidade: 1
  //   },
  // ];

  public produtos: ProdutoDetalhe[];

  constructor(
    private route: ActivatedRoute,
    private alertCtrl: AlertController,
    private carrinhoService: CarrinhoService) {
  }

  ngOnInit() {
    const carrinho = this.carrinhoService.obterCarrinho()
            .then(res => {
              this.produtos = res.produtos;
            });
    console.log(this.produtos);
    // this.produtos.map(p => {
    //   this.atualizaPreco(p);
    // });
  }

  atualizaPreco(produto: ProdutoDetalhe) {
    //this.precoTotal += (produto.preco * produto.quantidade);
  }

  adicionar(produto: Produto): void {
    produto.quantidade += 1;
    //this.atualizaPreco(produto);
  }

  async remover(produto: ProdutoDetalhe) {
    if (produto.quantidade === 1) {
      console.log('Quer remover', produto.quantidade);
      await this.confirmaExclusao(produto);
    } else {
      produto.quantidade -= 1;
    }
    this.atualizaPreco(produto);
  }

  async confirmaExclusao(produto: ProdutoDetalhe): Promise<any> {
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

  excluirProdutoLista(produto: ProdutoDetalhe): void {
    this.produtos = [...this.produtos.filter(p => p.pid !== produto.pid)];
  }


}
