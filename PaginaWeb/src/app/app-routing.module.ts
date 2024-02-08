import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { EstadisticasComponent } from './Componentes/Estadisticas/Estadisticas.component';
import { MaquinasComponent } from './Componentes/Maquinas/Maquinas.component';
import { RanchosComponent } from './Componentes/Ranchos/Ranchos.component';
import { NoEncontradoComponent } from './Componentes/no-encontrado/no-encontrado.component';

const routes: Routes = [
  {path:"", component:InicioComponent},
  {path:"Estadisticas",component:EstadisticasComponent},
  {path:"Estadisticas/:id",component:EstadisticasComponent},
  {path:"Maquinas",component:MaquinasComponent},
  {path:"Rancho",component:RanchosComponent}, 
  {path:"**",component:NoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
