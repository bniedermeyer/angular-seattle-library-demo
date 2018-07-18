import { NgModule } from '@angular/core';
import { MatBadgeModule, MatButtonModule } from '@angular/material';

import { CounterButtonComponent } from './counter-button/counter-button.component';

@NgModule({
  imports: [MatBadgeModule, MatButtonModule],
  declarations: [CounterButtonComponent],
  exports: [CounterButtonComponent]
})
export class MyLibModule {}
