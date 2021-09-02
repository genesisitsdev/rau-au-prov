import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


//MOCKUP
import { PetListMosckService } from 'src/app/Services/mock/pet.list.mock.service';

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

  public categoriasList: string[] = ['cat1 1', 'Rações'];

  public categoria: string;

  public petsList: Pets[] = [ ];

  constructor(private route: ActivatedRoute) {
    let pet = new PetListMosckService
    this.petsList = pet.get()
  }

  ngOnInit() {

    const id = +this.route.snapshot.paramMap.get('idCategoria');

    this.categoria = this.categoriasList[id];

    console.log('categoria: ', this.categoria);
  }
}
