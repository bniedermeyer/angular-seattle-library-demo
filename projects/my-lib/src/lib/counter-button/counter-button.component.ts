import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {
  clickCount = 0;
  @Output() countChanged: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  /**
   * Increments the count when the button is clicked and emits an event
   * to notify parent component of new count value
   */
  handleButtonClick() {
    this.clickCount++;
    this.countChanged.emit(this.clickCount);
  }
}
