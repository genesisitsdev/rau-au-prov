import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'login',
        loadChildren: () => import('./Page/login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'usuario',
        loadChildren: () => import('./Page/usuario/usuario.module').then( m => m.UsuarioPageModule)
      },
      {
        path: 'endereco',
        loadChildren: () => import('./Page/endereco/endereco.module').then( m => m.EnderecoPageModule)
      },
      {
        path: 'geoendereco',
        loadChildren: () => import('./Page/geo-endereco/geo-endereco.module').then( m => m.GeoEnderecoPageModule)

      },
      {
        path: 'splash',
        loadChildren: () => import('./Page/splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)

      },
      {
        path: 'cadastro-usuario',
        loadChildren: () => import('./Page/cadastro-usuario/cadastro-usuario.module').then( m => m.CadastroUsuarioPageModule)

      },
      {
        path: 'geo-endereco',
        loadChildren: () => import('./Page/geo-endereco/geo-endereco.module').then( m => m.GeoEnderecoPageModule)

      },
      {
        path: 'localizacao',
        loadChildren: () => import('./Page/localizacao/localizacao.module').then( m => m.LocalizacaoPageModule)

      },
      {
        path: 'mapa-endereco',
        loadChildren: () => import('./Page/mapa-endereco/mapa-endereco.module').then( m => m.MapaEnderecoPageModule)

      },
      {
        path: 'loja',
        loadChildren: () => import('./Page/loja/loja.module').then( m => m.LojaPageModule)

      },
      {
        path: 'meio-pagamento',
        loadChildren: () => import('./Page/meio-pagamento/meio-pagamento.module').then( m => m.MeioPagamentoPageModule)

      },
      {
        path: 'menu-pet',
        loadChildren: () => import('./Page/menu-pet/menu-pet.module').then( m => m.MenuPetPageModule)

      },
      {
        path: 'menu-produto',
        loadChildren: () => import('./Page/menu-produto/menu-produto.module').then( m => m.MenuProdutoPageModule)

      },
      {
        path: 'produto',
        loadChildren: () => import('./Page/produto/produto.module').then( m => m.ProdutoPageModule)

      },
      {
        path: 'pagamento',
        loadChildren: () => import('./Page/pagamento/pagamento-routing.module').then( m => m.PagamentoPageRoutingModule)

      },
      {
        path: 'esqueci-senha',
        loadChildren: () => import('./Page/esqueci-senha/esqueci-senha.module').then( m => m.EsqueciSenhaPageModule)

      },
      {
        path: 'categoria',
        loadChildren: () => import('./Page/categoria/categoria.module').then(m => m.CategoriaPageModule)
      },
      {
        path: 'subcategoria',
        loadChildren: () => import('./Page/subcategoria/subcategoria.module').then(m => m.SubCategoriaPageModule)
      },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
