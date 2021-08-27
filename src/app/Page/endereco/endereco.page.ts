import { ActivatedRoute } from '@angular/router';
import { GeolocalizacaoService } from './../../Services/Geolocalizacao/geolocalizacao.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { regexValidators } from 'src/model/validators';
import { EnderecoService } from './../../Services/Endereco/endereco.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.page.html',
  styleUrls: ['./endereco.page.scss'],
})
export class EnderecoPage implements OnInit {

  public fGroup: FormGroup;
  public descricao = AbstractControl;
  public cep = AbstractControl;
  public endereco = AbstractControl;
  public numero = AbstractControl;
  public complemento = AbstractControl;
  public bairro = AbstractControl;
  public cidade = AbstractControl;
  public uf = AbstractControl;
  public referencia = AbstractControl;
  public latitude = AbstractControl;
  public longitude = AbstractControl;
  public inputLoading: boolean;
  public retornaEndereco: any;
  public listEndereco: any;
  public tratSemNumero: any;
  public tratSemComplemento: any;
  public requireSemNumero: any;
  public requireSemComplemento: any;
  public minhaLocalizacao: any;
  public resposta: any;
  public cepMapa:any;
  public tratCepMapa:any;



  constructor(
              public navCtrl: NavController,
              private fBuilder: FormBuilder,
              private router: ActivatedRoute,
              private loadingCtrl: LoadingController,
              private toastCtl: ToastController,
              private enderecoService: EnderecoService,
              private geolocalizacaoService: GeolocalizacaoService) {
                this.getEnderecoMapa();
               }

  ngOnInit() {
    this.validForm();
    this.inputLoading = false;
    this.retornaEndereco = '';
    this.tratSemComplemento = false;
    this.tratSemNumero = false;
    this.getLocalizacao();

  }

  validForm() {
    this.fGroup = this.fBuilder.group({
      cep: [
        '',
        Validators.compose([
          Validators.pattern(regexValidators.cep),
          Validators.required,
        ]),
      ],

      endereco: [
        '',Validators.required
      ],
      numero: ['', Validators.required],
      complemento: ['', Validators.required],
      referencia: [''],
      bairro: ['',Validators.required],
      descricao: ['',Validators.required],
      cidade: ['',Validators.required],
      uf: ['',Validators.required],


      semNumero: [false],
      semComplemento: [false],
    });


  }


  getCep(ev: any){
    const buscaCep = ev.value.replace(/[^0-9]/g,'');
    const tratCep = buscaCep.length;
    // console.log('Form cep: ', tratCep);

    if(tratCep === 8){
      this.inputLoading = true;
      this.enderecoService.getConsultaCep(buscaCep)
              .toPromise()
              .then(resp => {
                if(resp) {
                  this.inputLoading = false;
                  this.retornaEndereco = resp;
                  this.listEndereco = {
                    cep: this.retornaEndereco.cep,
                    endereco: this.retornaEndereco.logradouro,
                    complemento: this.retornaEndereco.complemento ? this.retornaEndereco.complemento : 'Complemento',
                    bairro: this.retornaEndereco.bairro,
                    cidade: this.retornaEndereco.localidade,
                    uf: this.retornaEndereco.uf
                  };

                }
                  console.log('Retorno do Cep: ', this.listEndereco.cep);
              });
    }
  }

  getEnderecoMapa() {
    this.router.queryParamMap.subscribe(param => {
      this.tratCepMapa = param;
      // this.cepMapa = parseInt(this.tratCepMapa.params.cep.replace(/[^0-9]/g,''),10);

      const buscaCep =this.tratCepMapa.params.cep.replace(/[^0-9]/g,'');
      const tratCep = buscaCep.length;
      console.log('Parametro: ', tratCep);
      // console.log('Form cep: ', tratCep);

      if(tratCep === 8){
        this.inputLoading = true;
        this.enderecoService.getConsultaCep(buscaCep)
                .toPromise()
                .then(resp => {
                  if(resp) {
                    this.inputLoading = false;
                    this.retornaEndereco = resp;
                    this.listEndereco = {
                      cep: this.retornaEndereco.cep,
                      endereco: this.retornaEndereco.logradouro,
                      complemento: this.retornaEndereco.complemento ? this.retornaEndereco.complemento : 'Complemento',
                      bairro: this.retornaEndereco.bairro,
                      cidade: this.retornaEndereco.localidade,
                      uf: this.retornaEndereco.uf
                    };

                  }
                    console.log('Retorno do Cep: ', this.listEndereco.cep);
                });
      }
    })
  }

  semNumero(ev: any){
    // console.log('Evento Numeto=> ', ev.detail.checked);
    this.tratSemNumero = ev.detail.checked;

  }

  semComplemento(ev: any){
    // console.log('Evento Complemento => ', ev.detail.checked);
    this.tratSemComplemento = ev.detail.checked;
  }

  getLocalizacao() {
    this.geolocalizacaoService.buscarPosicao()
        .then((resp) => {
          this.minhaLocalizacao = {
            lat: resp.coords.latitude,
            long: resp.coords.longitude
          };
          // console.log('Gelocation: ', this.minhaLocalizacao.lat, ' ', this.minhaLocalizacao.long);
  }).catch((error) => {
    console.log('Error getting location', error);
  });
}

  setEndereco() {
    const dadosPost = {
      descricao: this.fGroup.value.descricao,
      cep: this.listEndereco.cep && !this.fGroup.value.cep ? this.listEndereco.cep.replace(/[^0-9]/g,'') : this.fGroup.value.cep.replace(/[^0-9]/g,''),
      endereco: this.listEndereco.endereco && !this.fGroup.value.endereco? this.listEndereco.endereco : this.fGroup.value.endereco,
      complemento: this.fGroup.value.complemento,
      referencia: this.fGroup.value.referencia,
      numero: this.fGroup.value.numero,
      bairro: this.listEndereco.bairro && !this.fGroup.value.bairro ? this.listEndereco.bairro : this.fGroup.value.bairro,
      cidade: this.listEndereco.cidade && !this.fGroup.value.cidade ? this.listEndereco.cidade : this.fGroup.value.cidade,
      uf: this.listEndereco.uf && !this.fGroup.value.uf ? this.listEndereco.uf : this.fGroup.value.uf,
      latitude: this.minhaLocalizacao.lat,
      longitude: this.minhaLocalizacao.long,
      user_id: localStorage.getItem('id')
    };

    console.log('dados form=> ', dadosPost);

    this.presentLoading();

    this.enderecoService.setEndereco(dadosPost)
        .toPromise()
        .then(resp => {
          this.resposta = resp;
          // console.log('Retorno da Chamada: ', resp);
          this.presentToast(this.resposta.mensagem);
          this.home();
        }).catch(error => {
          console.log('Erro=> ', error);
          // this.errorPresentToast(JSON.stringify(error));
          console.log(error.error.message)
        });
  }


  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      mode: 'md',
      message: 'Salvando o Endereço!',
      duration: 3000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    // console.log('Loading dismissed!');
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


  home(){
    this.navCtrl.navigateForward('home');
  }


}
