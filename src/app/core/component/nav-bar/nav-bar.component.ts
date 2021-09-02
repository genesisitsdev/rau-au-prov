import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {
  @Input()
  public title: string;

  ngOnInit(): void {
    console.log('chegou: ', this.title);
  }
}
