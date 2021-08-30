import { Component, OnInit, Input } from '@angular/core';
import { Baner } from './Baner'

@Component({
  selector: 'component-baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.scss'],
})

export class BanerComponent implements OnInit {

  @Input() set baner(ban) {
    if(ban) {
      this.banerComponent=  new Baner(ban)
    }
  }

  public banerComponent: Baner

  constructor() {
  }

  ngOnInit() {
  }

}
