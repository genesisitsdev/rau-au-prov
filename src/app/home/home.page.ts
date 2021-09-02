import { GeolocalizacaoService } from './../Services/Geolocalizacao/geolocalizacao.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/Auth/auth.service';
import { FranquiaService } from './../Services/Franquias/franquia.service';
import { Router } from '@angular/router';

//############### MOCKUPS ###############################################################################
import { CategoriasMockService } from '../Services/mock/categorias.mock.service';
import { SegmentosMockService } from '../Services/mock/segmentos.mock.service';
import { PromoMockService } from '../Services/mock/promo.mock.service';
import { PromoCardMockService } from '../Services/mock/promocard.mock.service';
import { CardDescontoMockService } from '../Services/mock/card.desconto.mock.service';
import { MarcasMockService } from '../Services/mock/marcas.mock.service';
import { ProdutoMockService } from '../Services/mock/produto.mock.service';
//########################################################################################################


import { Categoria } from '../core/Categoria'
import { FactoryProduto as Produto } from '../Components/produto/Fatory.Produto';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  public optionsFranquias: any;
  public tollbarEndereco: any;
  public enderecoAtivo: any;
  public nomeUsuario: string;
  public usuario: string;
  public pathImagem: any;
  public slideOpts: any;
  public promoOpts: any;
  public ultimoPedidoOpts: any;
  public marcasOpts: any;

  public seguimentos: any[] = []
  public categorias: any[] = []
  public promo: any[] = []
  public promoCard: any[] = []
  public CardDesconto: any[] = []
  public marcas: any[] =[]
  public produtos: any[] = []

  constructor(
    private geoLocation: GeolocalizacaoService,
    private auth: AuthService,
    private franquiaService: FranquiaService,
    private router: Router
  ) {

    this.categorias = CategoriasMockService.get().map((cat: Categoria)=> {
      return new Categoria(cat)
    })

    let seg = new SegmentosMockService
    this.seguimentos = seg.get()

    this.promo = PromoMockService.get()

    let promocard = new PromoCardMockService
    this.promoCard = promocard.get()

    let card = new CardDescontoMockService
    this.CardDesconto = card.get()
    let marc = new MarcasMockService
    this.marcas = marc.get()

    let prod = new ProdutoMockService

    prod.get().forEach((produto: any)=> {
      this.produtos.push( new Produto(produto))
    })
  }

  ngOnInit() {
    this.enderecoPrincipal();
    this.dadosUsuario();
    this.getFranquias();
    this.pathImagem = 'assets/img/logo/';
  }

  navigarParaCategoria(idCategoria: any) {
    this.router.navigate(['/categoria', { idCategoria }]);
  }

  changeCategoria(categoria: any) {
    //this.router.navigate(['/categoria', { categoria }]);
    this.router.navigateByUrl('/categoria', { state: categoria})
    console.log("change categoria", categoria)
  }

  changeMenu(menu: any) {
    //this.router.navigateByUrl('/menu', { state: menu})
    console.log("Change Menu: ", menu)
  }

  changeProduto(produto: Produto) {
    //this.router.navigateByUrl('/produto', { state: produto})
    console.log("Home/Change Produto: ", produto)
  }

  enderecoPrincipal() {
    const id = localStorage.getItem('id');
    /*
    this.geoLocation
      .locationTolllbarHome(id)
      .toPromise()
      .then((resp) => {
        this.tollbarEndereco = resp[0].endereco;
        // console.log('Endereço Retornado => ', resp[0]);
      })
      .catch((erro) => {
        console.log(erro);
      });
      */
  }

  getFranquias() {
    /*
    this.franquiaService
      .getFranquias()
      .toPromise()
      .then((resp) => {
        this.optionsFranquias = resp;

        this.slideOpts = {
          slidesPerView: 3.4,
          freeMode: true,
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            autoplay: true,
          },
          // speed: 400
        };

        this.promoOpts = {
          initialSlide: 0,
          slidesPerView: 1,
          speed: 200,
          autoplay: true,
          loop: true,
        };

        this.ultimoPedidoOpts = {
          slidesPerView: 1.2,
          freeMode: true,
          overflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            autoplay: true,
          },
        };

        this.marcasOpts = {
          slidesPerView: 2.5,
          freeMode: true,
          overflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            autoplay: true,
          },
        };

        // console.log('Lista de Franquias: ', resp);
        // console.log('Caminho e imagem: ', this.pathImagem + JSON.stringify(this.CardUltimosPedidos));
      });
      */
  }

  dadosUsuario() {
    // this.usuario = JSON.parse(atob(localStorage.getItem('user')));
    // this.nomeUsuario =  localStorage.getItem('user') ? this.usuario : null;
    // console.log('dados Usuário ', this.usuario);
  }


}
