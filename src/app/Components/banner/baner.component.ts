import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Baner } from './Baner'

@Component({
  selector: 'baner-component',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.scss'],
})

export class BanerComponent implements OnInit {

  @Input() set baner(ban) {
    if(ban) {
      this.banerComponent=  new Baner(ban)
    }
  }

  @Output() changeBaner = new EventEmitter<Baner>()

  public banerComponent: Baner

  constructor() {
  }

  ngOnInit() {
  }

  public selecionarBaner(baner: Baner) {
    this.changeBaner.emit(baner)
  }

}
