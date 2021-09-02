export class MarcasMockService {

  public get() {
    return [
      {
        id: 1,
        marca: 'pedigre',
        img: '../../assets/img/rauau/marcas/pedigre.png',
      },
      {
        id: 1,
        marca: 'whiskas',
        img: '../../assets/img/rauau/marcas/whiskas.png',
      },
      { id: 1, marca: 'golden', img: '../../assets/img/rauau/marcas/golden.png' },
    ]
  }
}
