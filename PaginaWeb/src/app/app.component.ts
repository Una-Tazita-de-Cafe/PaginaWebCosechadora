import { Component } from '@angular/core';
import { Lista } from './Datos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PaginaWeb';
  Elementos:Lista[]=[];
  constructor(){}
}
