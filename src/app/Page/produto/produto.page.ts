import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoDetalhe } from 'src/app/Components/produto-detalhe/ProdutoDetalhe';
import { FactoryProduto as Produto } from 'src/app/Components/produto/Fatory.Produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {
  public title: string = "Produto"
  produtoComponent: any;
  categoria: string

  public produto: any

  public produtos: Produto[] = []

  constructor(private router: Router, private route: ActivatedRoute) {

    this.produto = new ProdutoDetalhe
    this.produto.mockDetahle()
    let prod = new Produto
    prod.mock()
    this.produtos.push(prod)
    this.produtos.push(prod)
    this.produtos.push(prod)
    console.log("PROD: ------------- ", prod)
  }

  ngOnInit() {
    let produto = this.router.getCurrentNavigation().extras.state
    this.produto = new ProdutoDetalhe(JSON.parse(JSON.stringify(produto)))
    console.log('Produto INIT: ', this.produto)
  }

  public changeProdutoDetalhe(produto: ProdutoDetalhe) {
    this.produtoComponent = produto
    //this.router.navigate(['/home', { produto }]);
  }

  public changeProdutoComprado(produto: Produto) {
    //this.router.navigate(['/home', { produto }]);
    console.log("Produto Conprado: ", produto)
  }

  public comprarProduto(produto: ProdutoDetalhe) {
    this.router.navigateByUrl('/carrinho', { state: produto})
    console.log("Comprar Produto: ", produto)
  }
}
