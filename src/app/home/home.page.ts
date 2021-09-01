import { GeolocalizacaoService } from './../Services/Geolocalizacao/geolocalizacao.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/Auth/auth.service';
import { FranquiaService } from './../Services/Franquias/franquia.service';
import { Router } from '@angular/router';

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

  public seguimentos = [
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
  ];

  public promo: any = [
    { id: 1, img: '../../assets/img/rauau/promo/banner.png' },
    // {id:2, img:'assets/img/promo/Banner.png'},
    // {id:3, img:'assets/img/promo/banner-dose-dupla.jpg'},
    // {id:4, img:'assets/img/promo/Banner_site_pasta.png'},
    // {id:5, img:'assets/img/promo/INVERNO_SITE_pasta.png'},
    // {id:6, img:'assets/img/promo/INVERNO_SITE_burger.png'},
    // {id:7, img:'assets/img/promo/INVERNO_SITE_grill.png'},
    // {id:8, img:'assets/img/promo/INVERNO_SITE_NAJAH.png'},
    // {id:9, img:'assets/img/promo/INVERNO_SITE_pizza.png'}
  ];

  public promoCard: any = [
    { id: 1, img: 'assets/img/promo/84rolls.jpg' },
    { id: 2, img: 'assets/img/promo/COMBO2.png' },
    { id: 3, img: 'assets/img/promo/NOVOS_30.jpg' },
  ];

  public CardDesconto: any = [
    {
      id: 1,
      nome: 'Organnact',
      marca: 'Promum Dog',
      preco: 'R$ 64,90',
      desconto: 'R$ 18,00',
      img: '../../assets/img/rauau/Produtos/Organnact_Promun_Dog.png',
    },
    {
      id: 1,
      nome: 'Antipulgas e Carrapatos  MSD para Cães de 20Kg a 40Kg',
      marca: 'Promum Dog',
      preco: 'R$ 237,92',
      desconto: 'R$ 15,00',
      img: '../../assets/img/rauau/Produtos/bravecto.jpg',
    },
  ];

  public marcas = [
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
  ];

  public fixo: any = [
    {
      id: 1,
      nome: 'Ração Golden Special Sabor Frango e Carne ',
      marca: 'Premier Pet',
      tipo: 'Golden',
      preco: 'R$ 132,99',
      desconto: 'R$ 18,00',
      img: '../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png',
      categoria: 'Golden',
    },
    {
      id: 1,
      nome: 'Ração Golden Special Sabor Frango e Carne ',
      marca: 'Premier Pet',
      tipo: 'Golden',
      preco: 'R$ 132,99',
      desconto: 'R$ 18,00',
      img: '../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png',
    },
    {
      id: 1,
      nome: 'Ração Golden Special Sabor Frango e Carne ',
      marca: 'Premier Pet',
      tipo: 'Golden',
      preco: 'R$ 132,99',
      desconto: 'R$ 18,00',
      img: '../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png',
    },
    {
      id: 1,
      nome: 'Ração Golden Special Sabor Frango e Carne ',
      marca: 'Premier Pet',
      tipo: 'Golden',
      preco: 'R$ 132,99',
      desconto: 'R$ 18,00',
      img: '../../assets/img/rauau/Produtos/Ração Golden Special Sabor Frango e Carne.png',
    },
  ];

  public categorias: any[] = [
    { name: "cachorros", url: "../../../assets/img/rauau/icons/rau-au-cachoro.svg"},
    { name: "gatos", url: "../../../assets/img/rauau/icons/rau-au-gato.svg"},
    { name: "pássaros", url: "../../../assets/img/rauau/icons/rau-au-passaro.svg"},
    { name: "pássaros", url: "../../../assets/img/rauau/icons/rau-au-passaro.svg"}
  ]

  constructor(
    private geoLocation: GeolocalizacaoService,
    private auth: AuthService,
    private franquiaService: FranquiaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.enderecoPrincipal();
    this.dadosUsuario();
    this.getFranquias();
    this.pathImagem = 'assets/img/logo/';
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

  navigarParaCategoria(idCategoria: any) {
    this.router.navigate(['/categoria', { idCategoria }]);
  }

  changeCategoria(categoria: any) {
    console.log("change categoria", categoria)
  }

  changeMenu(menu: any) {
    console.log("Change Menu: ", menu)
  }
}
