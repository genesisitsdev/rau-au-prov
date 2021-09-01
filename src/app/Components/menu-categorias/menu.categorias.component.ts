import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";


@Component({
  selector: "menu-categorias-component",
  templateUrl: "./menu.categorias.component.html",
  styleUrls: [ './menu.categorias.component.scss']
})

export class MenuCategoriasComponent implements OnInit {

  @Input() set categorias(cat: any) {
    if(cat) {
      this.categoriasComponent = cat
    }
  }

  @Output() changeMenu = new EventEmitter<any>()

  public categoriasComponent: any[] = []

  public slideOptions: any = {
    speed: 400,
  }

  public constructor() {
    this.categoriasComponent = [
      { name: "cachorro", url: "../../../assets/img/rauau/icons/rau-au-cachoro.svg"},
      { name: "gato", url: "../../../assets/img/rauau/icons/rau-au-gato.svg"},
      { name: "pássaro", url: "../../../assets/img/rauau/icons/rau-au-passaro.svg"}
    ]
  }

  ngOnInit(){}

  changeCategoria(categoria: any) {
    this.changeMenu.emit(categoria)
  }



}
