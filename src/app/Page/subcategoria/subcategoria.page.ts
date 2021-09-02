import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Racao } from '../../core/Racao'

import { RacaoListMockService } from 'src/app/Services/mock/racao.list.mock.service';
@Component({
  templateUrl: './subcategoria.page.html',
  styleUrls: ['./subcategoria.page.scss']
})
export class SubCategoriaPage implements OnInit {
  public title: string
  public subcategoria: any;

  public tiposRacao: any[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.tiposRacao = RacaoListMockService.get().map((racao: any)=> {
      return new Racao(racao)
    })
  }

  ngOnInit() {

    this.subcategoria = this.router.getCurrentNavigation().extras.state
    this.title = this.subcategoria.nome

  }

  changeSubcategria(racao: Racao) {
    this.router.navigateByUrl('/menu-produto', { state: racao})
    console.log(" tipos de racao: ", racao)
  }
}
