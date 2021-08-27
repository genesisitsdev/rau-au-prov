import { AuthService } from './../../Services/Auth/auth.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { regexValidators } from '../../../model/validators';
//  import { SplashScreenPage } from './../splash-screen/splash-screen.page';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  buttonIcon: any = 'chevron-back-outline';
  public fGroup: FormGroup;
  public email: AbstractControl;
  public senha: AbstractControl;

  constructor(
              public navCtrl: NavController,
              private fBuilder: FormBuilder,
              private auth: AuthService) { }

  ngOnInit() {
    this.createForm();
    //this.auth.getUser();
  }

  createForm() {
    this.fGroup = this.fBuilder.group({

    email:['',Validators.compose([
        Validators.pattern(regexValidators.email),
        Validators.required
      ])
    ],

    password: ['',Validators.compose([
      Validators.pattern(regexValidators.password),
      Validators.required
    ])
  ],
});
}

login() {
  this.auth.login(this.fGroup.value)
  .subscribe(data => {
    console.log('Response Login: ' + JSON.stringify(data));
    if(data){
      this.navCtrl.navigateRoot('home');
      }else {
        this.navCtrl.navigateRoot('home');
      }
    });
  }

  redorect() {

  }

  loading(){
    this.navCtrl.navigateForward('usuario');
  }
  cadastro(){
    this.navCtrl.navigateForward('cadastro-usuario');
  }

  testeMapa() {
    this.navCtrl.navigateForward('mapa-endereco');
  }

}
