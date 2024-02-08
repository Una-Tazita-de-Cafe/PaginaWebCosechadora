import { Time } from "@angular/common";
import { Data } from "popper.js";

export class Lista{
    constructor(public id:number,public nombre:string, public fechaI:string,  public fechaF:String,public Parcela: String, public status:string){}
}
export class Datos_Grafica{
    constructor(public NombreRancho:string, public Parcela:string, public CantidadObsercada:number, public CantidadenRango:number,  public CantidadFueraRango:number, public fechaI:string,  public fechaF:String ){}
}
export class Datos_Observacion{
    constructor(public listaCosecha:string){}
}
