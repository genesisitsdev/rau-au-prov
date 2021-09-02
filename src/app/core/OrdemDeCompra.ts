export class OrdemDeCompra {

  id: number
  usuario: any
  produtos: any[]
  resumo: any = {
    subtotal: 0,
    valorDoFrete: 0,
    Desconto: 0,
    total: 0,
    tipoDePagamento: "",
    endereco: {},
    horario: '',
    status: ""
  }

}
