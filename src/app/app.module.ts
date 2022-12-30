import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { NavegacionComponent } from './navegacion/navegacion.component';

import { Pagina3Component } from './pagina3/pagina3.component';

import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina4Component } from './pagina4/pagina4.component';


@NgModule({
  declarations: [
    AppComponent,
    Pagina2Component,

    NavegacionComponent,

    Pagina3Component,
    Pagina1Component,
    Pagina4Component

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
