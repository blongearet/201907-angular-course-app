import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  @Input() public rating: number = 0
  @Output() public ratingClicked: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {
  }

  public onClick(value: number) {
    this.ratingClicked.emit(value)
  }
}
