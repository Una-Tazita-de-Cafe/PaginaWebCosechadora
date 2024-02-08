import { Component, OnInit } from '@angular/core';
import { Datos_Grafica, Datos_Observacion, Lista } from '../../Datos';
import { Listado } from './Listado';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-Estadisticas',
  templateUrl: './Estadisticas.component.html',
  styleUrls: ['./Estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  lista:Lista[]=[new Lista(1,"Chingon","20-07-28","20-07-28","Par-23-h1","Finalizado"),new Lista(2,"Gato loco","20-07-28","20-07-28","Par-20-h1","Finalizado"),new Lista(3,"Casa de Nadien","20-07-28","20-07-28","Par-36-h1","Finalizado")];
  id:number=0;
  datos: any;
  datos_grafica:any;
  datosGrafic:any={
    1:{
      "numeros":[12,58,46,78,96,98,665,333,400,354,654,435,360,236,123,58,48,43,12],
      "datos":{
        "rancho":"Chingon",
        "parcela":"Par-22-h1",
        "fechaI":"20-07-23",
        "fechaF":"20-07-23",
      },
      "cantidad":{
        "cantidadObs":412,
        "cantidadEnRango":440,
        "cantidadFueraRango":72,
        "pordebajo":25,
        "porencima":54
      }
    },
    2:{
      "numeros":[50,35,36,40,43,44,35,29,25,10],
      "datos":{
        "rancho":"Mejor es nada",
        "parcela":"Par-23-h1",
        "fechaI":"15-07-23",
        "fechaF":"16-07-23",
      },
      "cantidad":{
        "cantidadObs":1312,
        "cantidadEnRango":1240,
        "cantidadFueraRango":72,
        "pordebajo":25,
        "porencima":54
      }
    },
    3:{
      "numeros":[100,15,35,36,40,43,44,35,29,25],
      "datos":{
        "rancho":"los Z",
        "parcela":"Par-32-h1",
        "fechaI":"22-07-23",
        "fechaF":"23-07-23",
       
      },
      "cantidad":{
        "cantidadObs":312,
        "cantidadEnRango":240,
        "cantidadFueraRango":72,
        "pordebajo":25,
        "porencima":54
      }
    }
  }
  IdDatos(id:number){
    this.id=id;
   /*
    this._apiDatos.ObtenerGrafica(id).subscribe(dato=>{
      this.datos_grafica=dato[0];
      
    },error=>{
      alert("El back no jala alv");
      this.id=0;
    });
     */
    this._apiDatos.ObtenerGraficaPapas(id).subscribe(dato=>{
      this.datos_grafica=dato[0];
      
    },error=>{
      alert("El back no jala alv");
      this.id=0;
    });
  }
  constructor(private _apiDatos:ApiService) {
     
   }
  ngOnInit():void {
    /*
    this._apiDatos.ObtenerDatos().subscribe(datos=>{
      this.datos=datos;
      console.log(this.datos);
    },error=>{
      alert("El back no jala alv");
    }
    );
    */
    this._apiDatos.ObtenerDatosPapas().subscribe(datos=>{
      this.datos=datos;
      console.log(this.datos);
    },error=>{
      alert("El back no jala alv");
    }
    );
  }

}
/*
 system.out.printnl("Pruebas para checar el funcionamiento del back end")

public class papadelospollitos(<list>){
  public static Metodo_1(int numero_longuitud)
  {
    if(numero_longuitud=>32)
      Metodo_2("esta cosa este jalando bastante bien");
    else 
      Metodo_3();
  }
  public int[] Metodo_2(String comnetario){
    Systema.out.println(comentario);
  }
}
 public static void main(System.int){
  
 }

*/