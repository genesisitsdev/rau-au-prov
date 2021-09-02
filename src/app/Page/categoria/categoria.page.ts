import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pet } from '../../core/Pet'


//MOCKUP
import { PetListMosckService } from 'src/app/Services/mock/pet.list.mock.service';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss']
})
export class CategoriaPage implements OnInit {
  public title: string
  public categoria: any;
  public petsList: Pet[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.petsList = PetListMosckService.get().map((pet: any)=> {
      return new Pet(pet)
    })
  }

  ngOnInit() {this.categoria = this.router.getCurrentNavigation().extras.state
    this.title = this.categoria.nome

    console.log('Categoria: ', this.categoria);
  }

  public changeSubcategoria(pet: Pet) {
    this.router.navigateByUrl('/subcategoria', { state: pet})
    console.log("change subcategoria: ", pet)
  }
}
