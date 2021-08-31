import { Produto } from './Produto'

interface IFactoryProduto {
  categorias: string[];
  favorito: boolean;
  descricao: string;
}

export class FactoryProduto extends Produto {

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

}
