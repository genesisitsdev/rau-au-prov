import { CadastroUsuarioService } from './../../Services/CadastroUsuario/cadastro-usuario.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';

import { regexValidators } from '../../../model/validators';

import { LoadingController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {
  public fGroup: FormGroup;
  public name: AbstractControl;
  public email: AbstractControl;
  public password: AbstractControl;
  public password_confirmation: AbstractControl;
  public mensagem:any;

  constructor(public navCtrl: NavController,
              public router: Router,
              private fBuilder: FormBuilder,
              public loadingCtrl: LoadingController,
              public toastCtl: ToastController,
              private cadUsuario: CadastroUsuarioService) {
    this.formValidation();
  }

  ngOnInit() {
    //
  }

  formValidation() {
    this.fGroup = this.fBuilder.group({
      name: [
        '',
        Validators.compose([
          Validators.required
        ]),
      ],

      email: [
        '',
        Validators.compose([
          Validators.pattern(regexValidators.email),
          Validators.required,
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.pattern(regexValidators.password),
          Validators.required,
        ]),
      ],
      password_confirmation: [
        '',
        Validators.compose([
          Validators.pattern(regexValidators.password),
          Validators.required,
        ]),
      ],
    });
  }

  setUsuario() {
    this.cadUsuario.setUsuario(this.fGroup)
        .toPromise()
        .then(resp => {
          const callBack: any = [resp];
          console.log('Resposta com Sucesso: ', callBack[0]);
          this.presentLoading('Validando as informações!');
          localStorage.setItem('id', callBack[0].user.id);

          if(callBack[0].message) {
            this.presentToast(callBack[0].message);
            this.navCtrl.navigateRoot('endereco');
            // this.router.navigate(['/endereco'], callBack[0]);
          }

        }).catch(erro => {
          let errorTrat = JSON.parse(erro.error);
          console.log('Erro no calback: ', errorTrat.email[0]);
          if(errorTrat.email[0]){
            // this.erroPresentLoading(errorTrat.email[0]);
            this.errorPresentToast(errorTrat.email[0]);

          }
        });

  }

  async presentLoading(par) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      mode: 'md',
      message: `${par}`,
      duration: 3000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async erroPresentLoading(par) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: `${par}`,
      duration: 3000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async presentToast(par) {
    const toast = await this.toastCtl.create({
      cssClass: 'sucess-class',
      color: 'success',
      mode: 'md',
      message: `${par}`,
      duration: 3000
    });
    toast.present();
  }

  async errorPresentToast(par) {
    const toast = await this.toastCtl.create({
      cssClass: 'error-class',
      color: 'danger',
      mode: 'md',
      message: `${par}`,
      duration: 3000
    });
    toast.present();
  }


  redirectUsuario(id) {
    // this.navCtrl.navigateRoot('endereco');
    this.router.navigate(['/endereco'], id.id);
  }
}
