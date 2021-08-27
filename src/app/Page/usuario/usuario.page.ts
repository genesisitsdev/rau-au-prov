import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators } from '@angular/forms';
  import { LoadingController,
           NavController,
           ToastController } from '@ionic/angular';

  import * as moment from 'moment';
  import 'moment/locale/pt-br';

  import { regexValidators } from '../../../model/validators';
  import { CadastroUsuarioService } from './../../Services/CadastroUsuario/cadastro-usuario.service';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

    public fGroup: FormGroup;
    public dtNascimanto= AbstractControl;
    public cpf= AbstractControl;
    public celular= AbstractControl;
    public confimeEmail= AbstractControl;
    public termos= AbstractControl;
    public sms= AbstractControl;
    public par;
    public dataFGroup;
    public validFGroupBotton;
    public responseTrat;
    public errorTrat;
    // public activeTermos: boolean;
    // public activeSms: boolean;


  constructor(
              public navCtrl: NavController,
              private fBuilder: FormBuilder,
              public loadingCtrl: LoadingController,
              public toastCtl: ToastController,
              private cadUsuario: CadastroUsuarioService) {
                this.validFGroupBotton = false;
              }

  ngOnInit() {
    this.validForm();
    this.dataFGroup = false;
    this.validBotton();
  }

  validForm() {
    this.fGroup = this.fBuilder.group({
      dtNascimanto: ['', Validators.required],

      cpf: [
        '',
        Validators.compose([
          Validators.pattern(regexValidators.cpf),
          Validators.required,
        ]),
      ],
      celular: [
        '',
        Validators.compose([
          Validators.pattern(regexValidators.telefone),
          Validators.required,
        ]),
      ],
      confimeEmail: [
        '',
        Validators.compose([
          Validators.pattern(regexValidators.email),
          Validators.required,
        ]),
      ],

      termos: [false, Validators.required],
      sms: [false],
    });
  }

  validTermos() {
    this.dataFGroup = this.fGroup.value.termos ? false : true;
    this. validBotton();

  }

  validBotton() {
    this.validFGroupBotton = !this.fGroup.valid || !this.dataFGroup ? true : false;

  }
  createDadosUsuarios() {
    this.validTermos();
    const param = 'Enviando dados!';
      this.presentLoading(param, true);
      const data = {
        cpf: this.fGroup.value.cpf.replace(/[^0-9]/g, '').replace(/[^0-9]/g,''),
        celular: this.fGroup.value.celular.replace(/[^0-9]/g, '').replace(/[^0-9]/g,''),
        dt_nascimento: moment(`${this.fGroup.value.dtNascimanto}`, 'DD/MM/YYYY').format('YYYY-MM-DD'),
        email: this.fGroup.value.confimeEmail,
        politica_privacidade: this.fGroup.value.termos ? true : false,
        recebimento_cupons: this.fGroup.value.sms ? true : false,
        user_id: localStorage.getItem('id')
      };
      this.dataFGroup = data.politica_privacidade;
     this.cadUsuario.setDadosCliente(data)
    .toPromise()
    .then(resp => {
      this.responseTrat = resp;
      // console.log('Resposta do POST: ', resp);
      this.presentLoading(param, false);
        if(this.responseTrat.status === '23000'){
          this.errorTrat = JSON.stringify(this.responseTrat.body).split(' ')[5].replace(/[\\'"]/g, '');

          if(this.errorTrat === 'clientes_cpf_unique') {
            this.par = 'O CPF informado já encontra-se em uso na nossa base de dados';
             this.errorPresentToast(this.par);
             this.validFGroupBotton = false;
          }else if(this.errorTrat === 'clientes_celular_unique') {
            this.par = 'O Celular informado já encontra-se em uso na nossa base de dados';
             this.errorPresentToast(this.par);
             this.validFGroupBotton = false;

        }
          }else {
            this.presentToast(this.responseTrat.mensagem);
            this. enderecoUsuario();
          }

      }).catch(error => {
          console.log('Mensagem de Erro: ', error);
          if(error){
            this.errorPresentToast('Não foi possivel salvar os dados informados, contate o suporte!');
            this.validFGroupBotton = false;
          }
        });


      }

  async presentLoading(par, resp) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      mode: 'md',
      message: `${par}`,
      duration: 3500
    });
    if(resp) {

      await loading.present();
    }else if(!resp){

      // const { role, data } = await loading.onDidDismiss();
      console.log('Loading dismissed!');
      return await this.loadingCtrl.dismiss();
      // return this.loadingCtrl.dismiss();
    }

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


  enderecoUsuario(){
    this.navCtrl.navigateRoot('geo-endereco');
  }


}
