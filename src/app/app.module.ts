import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyLibModule } from 'my-lib';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MyLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
