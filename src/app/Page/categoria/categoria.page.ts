import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface Pets {
  id: number;
  name: string;
}

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss']
})
export class CategoriaPage implements OnInit {
  public categoriasList: string[] = ['Teste', 'Rações'];
  public categoria: string;
  public petsList: Pets[] = [
    {
      id: 1,
      name: 'Cachorros'
    },
    {
      id: 2,
      name: 'Gatos'
    },
    {
      id: 3,
      name: 'Pássaros'
    },
    {
      id: 4,
      name: 'Peixes'
    },
    {
      id: 5,
      name: 'Outros Pets'
    },
  ];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('idCategoria'));
    this.categoria = this.categoriasList[id];
    console.log('categoria: ', this.categoria);
  }
}
