import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavegacionComponent } from './navegacion/navegacion.component';

import { Pagina3Component } from './pagina3/pagina3.component';

import { Pagina1Component } from './pagina1/pagina1.component';


@NgModule({
  declarations: [
    AppComponent,

    NavegacionComponent

    Pagina3Component,
    Pagina1Component

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
