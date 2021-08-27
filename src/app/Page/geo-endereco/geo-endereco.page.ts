import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geo-endereco',
  templateUrl: './geo-endereco.page.html',
  styleUrls: ['./geo-endereco.page.scss'],
})
export class GeoEnderecoPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  mapa(){
    this.navCtrl.navigateForward('mapa-endereco');
  }

  endereco(){
    this.navCtrl.navigateForward('endereco');
  }


}
