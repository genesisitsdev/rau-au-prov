import { Produto } from './Produto'

interface IFactoryProduto {
  categorias: string[];
  favorito: boolean;
  descricao: string;
  toggleFavorito()
}

export class FactoryProduto extends Produto implements IFactoryProduto{

  categorias: string[];
  favorito: boolean = false;
  descricao: string

  public constructor(factoryProdutoAbstrado = {
    categorias: [''],
    favorito: false,
    descricao: ''
  }) {
    super(factoryProdutoAbstrado)
    this.categorias = factoryProdutoAbstrado.categorias
    this.favorito = factoryProdutoAbstrado.favorito
    this.descricao = factoryProdutoAbstrado.descricao
  }

  public toggleFavorito() {
    this.favorito = !Boolean(this.favorito)
  }

  public mock() {
    this.pid = "1"
    this.nome = "Ração Golden Special Sabor Frango e Carne"
    this.marca = 'Premier Pet'
    this.preco = 132.99
    this.desconto = 18
    this.imagemUrl = '../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png'
    this.tipo = 'Golden'
    this.categoriaCorrente = 'Golden'
    this.favorito = false

  }

}
