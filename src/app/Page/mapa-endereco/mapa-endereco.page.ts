import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { NavController } from '@ionic/angular';
// import { title } from 'process';
import { GeolocalizacaoService } from './../../Services/Geolocalizacao/geolocalizacao.service';

@Component({
  selector: 'app-mapa-endereco',
  templateUrl: './mapa-endereco.page.html',
  styleUrls: ['./mapa-endereco.page.scss'],
})
export class MapaEnderecoPage implements OnInit {

  map: google.maps.Map;
  minhaPosicao: google.maps.LatLng;
  listaEndereco = [];

  private autoComplete = new google.maps.places.AutocompleteService();
  private direction = new google.maps.DirectionsService();
  private directionsRende = new google.maps.DirectionsRenderer();

  public cep: any;
  public enderecoValido:any;

  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;

  constructor(private ngZone: NgZone,
              private router: Router,
              public navCtrl: NavController,
              private geolocalizacaoService: GeolocalizacaoService) { }

  ionViewWillEnter(){
    this.exibiMapa();
  }

  ngOnInit() {
  }

  exibiMapa(){
    const posicao = new google.maps.LatLng(-22.789446296740238, -42.949668020783825);
    const opcoes = {
      center: posicao,
      zoom: 4,
      disableDefaultUI: true
    };

    this.map = new google.maps.Map(this.mapRef.nativeElement, opcoes);

    // new google.maps.Marker({
    //   position: posicao,
    //   map: this.map,
    //   title: 'Estou Aqui!',
    //   animation: google.maps.Animation.BOUNCE
    // });

    this.buscarPosicao();

  }

  buscarPosicao(){

    this.geolocalizacaoService.buscarPosicao()
      .then((resp) => {
        // resp.coords.latitude;
    //   // resp.coords.longitude;
        this.minhaPosicao = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
        this.geoLocation(resp.coords.latitude, resp.coords.longitude);
        this.irParaMinhaPosicaao();
      }).catch((error) => {
           console.log('Error getting location', error);
         });

  }

  geoLocation(lat, long) {

    const options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 2
  };


  this.geolocalizacaoService.geoCode(lat, long, options)
  .then(result => {
    console.log('Reverse: ', result[0]);
    this.cep = result[0].postalCode;
    this.enderecoValido = {
        cep:result[0].postalCode,
        endereco: result[0].thoroughfare,
        bairro: result[0].subLocality,
        cidade: result[0].administrativeArea,
        uf: result[0].administrativeArea,
        numero: result[0].subThoroughfare
    };
  })
  //   (result: NativeGeocoderResult[]) => {
  //   alert(JSON.stringify(result[0]));
  //   console.log('Retorno do GeoCoder: ' , JSON.stringify(result[0]))
  // })
  .catch((error: any) => console.log('Erro: ',error));

  }

  irParaMinhaPosicaao(){
    this.map.setCenter(this.minhaPosicao);
    this.map.setZoom(16);



    const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Minha Localização</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large </p> " +

    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";

    // var markers = new MarkerWithLabel({
    //   map: this.map,
    //   draggable: true,
    //   raiseOnDrag: true,
    //   labelContent: "ABCD",
    //   labelAnchor: new google.maps.Point(15, 65),
    //   labelClass: "labels", // the CSS class for the label
    //   labelInBackground: false,
    //   icon: ''
    // });

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    infowindow.open();

    const icone = {
      url:'../../../assets/img/icones/minha_localizacao.png',
      scaledSize: new google.maps.Size(30, 38), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(40, 5), // anchor
      // strokeWeight: 1,
      // fillColor: '#0084ff',
      // fillOpacity: 1,
      // strokeColor: '#ffffff',
      // bottom: '30px'
    }

    const marker = new google.maps.Marker({
      position: this.minhaPosicao,
      title: 'Estou aqui!',
    //   label:{
    //     text: 'Teste Label',
    //     color: 'black',
    //     fontSize: '12px',
    //     className:'label'
    //     // x: '200',
    //     // y: '100'
    // },
      icon: icone,
      animation: google.maps.Animation.DROP,
      map: this.map
    });

    // marker.addListener('click', () => {
    //   infowindow.open({
    //     anchor: marker,
    //     map: this.map,
    //     shouldFocus: true,
    //   });
    // });
  }

  buscarEndereco(eventoCampoBuscar: any){
    const busca = eventoCampoBuscar.target.value as string;

    if(!busca.trim().length){
      this.listaEndereco = [];
      return false;
    }

    this.autoComplete.getPlacePredictions({input: busca}, (arrayLocais, status) =>{

      if(status === 'OK'){
        this.ngZone.run(() => {
          this.listaEndereco = arrayLocais;
        });
      }else{
        this.listaEndereco = [];
      }

    });
  }

  public tracarRota(local: google.maps.places.AutocompletePrediction){
    this.listaEndereco = [];

    new google.maps.Geocoder().geocode({address: local.description}, resultado => {
      console.log(resultado[0].geometry.location);
      this.map.setCenter(resultado[0].geometry.location);
      this.map.setZoom(19);

      const marker = new google.maps.Marker({
          position: resultado[0].geometry.location,
          title:resultado[0].formatted_address,
          animation: google.maps.Animation.DROP,
          // icon:'#000',
          label: 'Teste',
          map: this.map
      });

      //------ Traça a Rota -----------------

      // const rota: google.maps.DirectionsRequest = {
      //   origin: this.minhaPosicao,
      //   destination: resultado[0].geometry.location,
      //   unitSystem: google.maps.UnitSystem.METRIC,
      //   travelMode: google.maps.TravelMode.DRIVING

      // };

      // this.direction.route(rota, (result, status) => {

      //   if(status == 'OK'){
      //     this.directionsRende.setMap(this.map);
      //     this.directionsRende.setDirections(result);
      //     this.directionsRende.setOptions({
      //        suppressMarkers: true,
      //     });
      //     console.log(result);
      //   }

    //  });


    });
  }


  endereco(ceps){
    // this.navCtrl.navigateForward('endereco', {
    //   'cep':
    // });
    const navigationExtra: NavigationExtras = {
      queryParams: {
        cep:ceps

      }
    };
    this.router.navigate(['endereco'], navigationExtra);
    // console.log('Cep do Botão: ',cep);

  }

}
