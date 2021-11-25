import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination'; // IMPORTAMOS EL COMPONENTE

import { AppComponent } from './app.component';
import { VideojuegosComponent } from './components/videojuegos/videojuegos.component';
import { ServiceVideojuegos } from './services/videojuegos.service';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule // IMPORTAMOS EL COMPONENTE
  ],
  providers: [ServiceVideojuegos],
  bootstrap: [AppComponent]
})
export class AppModule { }
