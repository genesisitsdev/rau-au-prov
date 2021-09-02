export class CategoriasMockService {
  static get() {
    return [
      { id: 1, nome: "cachorros", url: "../../../assets/img/rauau/icons/rau-au-cachoro.svg"},
      { id: 2, nome: "gatos", url: "../../../assets/img/rauau/icons/rau-au-gato.svg"},
      { id: 3, nome: "pássaros", url: "../../../assets/img/rauau/icons/rau-au-passaro.svg"},
    ]
  }
}
