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
    this.id = "1"
    this.nome = "Ração Golden Special Sabor Frango e Carne"
    this.marca = 'Premier Pet'
    this.tipo = 'Golden'
    this.preco = 132.99
    this.desconto = 18
    this.img = '../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png'
    this.categoria = 'Golden'
    this.favorito = false
    this.categorias = [ "cao", "gato"]
    this.descricao = "Cão e Gato"

  }

}
