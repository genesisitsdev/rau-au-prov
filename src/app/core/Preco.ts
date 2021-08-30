interface IPreco {
  moedas: string[];
  valor: number;
  moeda(sigla: string): string;
  formataParaRealBrasileiro(valor: number): string;
}

export class Preco implements IPreco {
  moedas: string[] = ['R$', '$', 'Y'];
  valor: number = 22025;

  constructor(preco: number) {
    this.valor = Math.round(Number(preco));
  }

  moeda(sigla: string): string {
    let indice = this.moedas.indexOf(sigla);
    if (indice >= 0) {
      switch (sigla) {
        case 'R$':
          return this.formataParaRealBrasileiro(this.valor);
          break;
        default:
          return this.formataParaRealBrasileiro(this.valor);
          break;
      }
    }
  }

  formataParaRealBrasileiro(valor: number): string {
    let vl = String(valor);
    let centavos = vl.substring(vl.length - 2);
    let real = vl.substring(0, vl.length - 3);
    return String(`R$ ${real},${centavos}`);
  }

  formataParaDolaresAmericanos(valor: number) {}
}
