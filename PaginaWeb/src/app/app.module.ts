import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstadisticasComponent } from './Componentes/Estadisticas/Estadisticas.component';
import { BannerComponent } from './Componentes/Banner/Banner.component';
import { PiePaginaComponent } from './Componentes/piePagina/piePagina.component';
import { FormsModule } from '@angular/forms';
import { GraficaComponent } from './Componentes/Grafica/Grafica.component';
import { ListaComponent } from './Componentes/Lista/Lista.component';
import {HttpClientModule} from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { GraficaPapasComponent } from './Componentes/GraficaPapas/GraficaPapas.component';

@NgModule({
  declarations: [		
    AppComponent,
      EstadisticasComponent,
      BannerComponent,
      PiePaginaComponent,
      GraficaComponent,
      GraficaPapasComponent,
      ListaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
