import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProdutoDetalhe } from '../produto-detalhe/ProdutoDetalhe';
import { AlertController } from '@ionic/angular';
import { CarrinhoDeCompra } from '../../core/CarrainhoDeCompra'

class Quantize {
  public limit: number = 1000

  public addProduto(produto: ProdutoDetalhe) {
    if(produto.quantidade < this.limit) {
      produto.quantidade = Math.round((Number(produto.quantidade) + 1))
    }
  }

  public removerProduto(produto: ProdutoDetalhe) {
    if(produto.quantidade > 0) {
      produto.quantidade = Math.round((Number(produto.quantidade) - 1))
    }
  }

  public subTotal(produto: ProdutoDetalhe) {
    produto.subTotal = Number(((produto.preco - produto.desconto) * produto.quantidade).toFixed(2))
  }

}

@Component({
  selector: 'produto-resumo-component',
  templateUrl: './produto.resumo.component.html',
  styleUrls: ['./produto.resumo.component.scss'],
})
export class ProdutoResumoComponent implements OnInit {

  public quantizador: Quantize

  @Input() set produto(prod: ProdutoDetalhe) {
    if (prod) {
      this.produtoComponent = prod;
      this.quantizador.subTotal(this.produtoComponent)
      this.changeProduto.emit(this.produtoComponent);
    }
  }


  @Input() set carrinho(carrinho: CarrinhoDeCompra) {
    console.log("Carrinho >>>>>>: ", carrinho)
    if(carrinho) {
      this.carrinhoComponent = carrinho
    }
  }

  @Output() changeProduto = new EventEmitter<ProdutoDetalhe>();

  public produtoComponent: ProdutoDetalhe;
  public carrinhoComponent: CarrinhoDeCompra

  public constructor(private alertCtrl: AlertController) {
    this.quantizador = new Quantize
  }
  ngOnInit() {}

  public addProduto(produto: ProdutoDetalhe) {
    this.quantizador.addProduto(produto)
    this.quantizador.subTotal(produto)
    this.changeProduto.emit(produto)
  }

  public removerProduto(produto: ProdutoDetalhe) {
    this.quantizador.removerProduto(produto)
    this.quantizador.subTotal(produto)
    this.changeProduto.emit(produto)
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
  }



}
