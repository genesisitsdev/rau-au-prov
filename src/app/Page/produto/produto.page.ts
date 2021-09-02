import { Component, OnInit } from '@angular/core';
import { ProdutoDetalhe } from 'src/app/Components/produto-detalhe/ProdutoDetalhe';
import { Router, ActivatedRoute } from '@angular/router';
import { FactoryProduto as Produto } from 'src/app/Components/produto/Fatory.Produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  produtoComponent: any;
  categoria: string

  public produto: ProdutoDetalhe

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
    this.categoria = this.route.snapshot.paramMap.get('idSubCategoria');
    console.log('Menu Produto/subcategoria: ', this.categoria);
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
    this.router.navigate(['/carrinho', { produto }]);
    console.log("Comprar Produto: ", produto)
  }
}
