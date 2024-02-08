import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Lista } from 'src/app/Datos';

@Component({
  selector: 'app-Lista',
  templateUrl: './Lista.component.html',
  styleUrls: ['./Lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() Lista:any;
  @Output() ElementoSeleccionado=new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  SeleccionarDato(id:number){
    this.ElementoSeleccionado.emit(id);
  }
}
