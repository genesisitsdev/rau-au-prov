import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";


@Component({
  selector: "menu-component",
  templateUrl: "./menu.component.html",
  styleUrls: [ './menu.component.scss']
})

export class MenuComponent implements OnInit {

  @Output() changeMenu = new EventEmitter<any>()

  public user: any = {}
  public carrinhoDeCompra: any = {}
  public menu: any = {}

  ngOnInit(){}

  accessUser(user: any) {
    this.changeMenu.emit(user)
    console.log("Access User", user)
  }

  accessCarrinhoDeCompra(carrinho: any) {
    this.changeMenu.emit(carrinho)
    console.log("access carinho de compra: ", carrinho)
  }

  accessMenu(menu: any) {
    this.changeMenu.emit(menu)
  }

}
