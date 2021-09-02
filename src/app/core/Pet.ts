export class Pet {
  id: number = 1
  nome: string = ""

  constructor(petAbstrato = { id: 1, nome: ''}) {
    this.id = petAbstrato.id
    this.nome = petAbstrato.nome
  }
}
