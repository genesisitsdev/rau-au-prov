export class CategoriasMockService {

  public categorias: any[] = [
    { name: "cachorros", url: "../../../assets/img/rauau/icons/rau-au-cachoro.svg"},
    { name: "gatos", url: "../../../assets/img/rauau/icons/rau-au-gato.svg"},
    { name: "pássaros", url: "../../../assets/img/rauau/icons/rau-au-passaro.svg"},
    { name: "pássaros", url: "../../../assets/img/rauau/icons/rau-au-passaro.svg"}
  ]

  public get() {
    return this.categorias
  }
}
