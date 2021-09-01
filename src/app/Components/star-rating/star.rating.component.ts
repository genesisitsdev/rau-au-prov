import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'star-rating-component',
  templateUrl: './start.rating.component.html',
  styleUrls: ['./start.rating.component.scss'],
})
export class StarRatingComponent implements OnInit {
  @Input() set level(lv: any) {

    if(lv) {
      this.levelComponent = Number(lv);
    } else {
      this.levelComponent = 0
    }

    this.up()
  }

  @Output() changeLevel = new EventEmitter<any>();

  public levelComponent;
  public total: number = 5;
  public control: number = 1;

  public constructor() {
    this.levelComponent = 1
    this.up()
  }
  ngOnInit() {
    this.up()
  }

  changeStart(level: any) {
    this.up()
    this.changeLevel.emit(level);
  }

  up() {
    this.control = (this.total - Number(this.levelComponent))

    if(this.control > this.total) {
      this.control = this.total
    }

    if(this.levelComponent > this.total) {
      this.levelComponent = this.total
    }

    if(this.control < 0) {
      this.control = 0
    }

    if(this.levelComponent < 0) {
      this.levelComponent = 0
    }
  }
}
