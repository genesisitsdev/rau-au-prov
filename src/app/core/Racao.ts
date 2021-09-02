export class Racao {
  id: number = 1
  nome: string = ''

  constructor(racaoAbstrato = { id: 1, nome: ''}) {
    this.id = racaoAbstrato.id
    this.nome = racaoAbstrato.nome
  }

}
