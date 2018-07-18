import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentCount = 0;

  /**
   * Handles the event emitted by clicking the counter-button component from our library
   * @param newCount
   */
  handleCountChanged(newCount: number) {
    this.currentCount = newCount;
  }
}
