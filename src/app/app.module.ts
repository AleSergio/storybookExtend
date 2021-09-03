import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { ExtendComponentComponent } from './extend-component/extend-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ExtendComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
