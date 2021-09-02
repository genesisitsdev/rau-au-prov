export class SegmentosMockService {

  public get() {
    return [
      { id: 1, nome: 'Rações', img: 'assets/img/rauau/icones_slides/tigela.png' },
      {
        id: 2,
        nome: 'Petiscos',
        img: 'assets/img/rauau/icones_slides/petisco.png',
      },
      {
        id: 3,
        nome: 'Ossos',
        img: '../../assets/img/rauau/icones_slides/osso.png',
      },
      {
        id: 4,
        nome: 'Brinquedos',
        img: '../../assets/img/rauau/icones_slides/Briquedos.png',
      },
    ]
  }
}
