import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
   private apiUrl:string='https://localhost:5000/api/';
  constructor(private http:HttpClient) { }
  ObtenerDatos(): Observable<any>{
    return this.http.get(this.apiUrl+"datos");
  }
  ObtenerGrafica(id:number):Observable<any>{
    return this.http.get(this.apiUrl+"a/"+id);
  }
  ObtenerDatosPapas():Observable<any>{
    return this.http.get(this.apiUrl+'DatosPapas');
  }
  ObtenerGraficaPapas(id:number):Observable<any>{
    return this.http.get(this.apiUrl+"PapaGrafica/"+id);
  }
}
