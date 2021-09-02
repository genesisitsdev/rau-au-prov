interface IProduto {
  pid: string;
  nome: string;
  marca: string;
  preco: string;
  desconto: string;
  imagemUrl: string;
  categoriaCorrente: string;
  tipo: string;
}

export class Produto implements IProduto {
  pid: string;
  nome: string;
  marca: string;
  preco: string;
  desconto: string;
  imagemUrl: string;
  categoriaCorrente: string;
  tipo: string;
  quantidade: number;

  public constructor(produtoAbstrato: any = {
    id: '',
    nome: '',
    marca: '',
    preco: '',
    desconto: '',
    img: '',
    categortia: '',
    tipo: '',
    quantidade: 0
  }) {
    this.pid = produtoAbstrato.id;
    this.nome = produtoAbstrato.nome;
    this.marca = produtoAbstrato.marca;
    this.preco = produtoAbstrato.preco;
    this.desconto = produtoAbstrato.desconto;
    this.imagemUrl = produtoAbstrato.img;
    this.categoriaCorrente = produtoAbstrato.categoria;
    this.tipo = produtoAbstrato.tipo;
    this.quantidade = produtoAbstrato.quantidade;
  }
}
