import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaPage, Pets } from '../categoria/categoria.page';

export interface TiposRacao {
  id: number;
  name: string;
}

@Component({
  templateUrl: './subcategoria.page.html',
  styleUrls: ['./subcategoria.page.scss']
})
export class SubCategoriaPage implements OnInit {
  public subcategoria: string;
  public tiposRacao: TiposRacao[] = [
    {
      id: 1,
      name: 'Ração Seca'
    },
    {
      id: 2,
      name: 'Ração Úmida'
    },
    {
      id: 3,
      name: 'Ração Prescrita'
    },
    {
      id: 4,
      name: 'Ração Natural'
    },
    {
      id: 5,
      name: 'Ver Todos'
    },
  ];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    //only for development
    const petsList: Pets[] = new CategoriaPage(this.route).petsList;
    console.log('petsList: ', petsList);
    const id = +this.route.snapshot.paramMap.get('idSubCategoria');
    console.log('id: ', id);
    this.subcategoria = petsList[id-1].name;
    console.log('subcategoria: ', this.subcategoria);
  }
}
