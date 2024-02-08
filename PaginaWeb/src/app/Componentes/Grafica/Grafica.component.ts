import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { Datos_Grafica, Datos_Observacion } from 'src/app/Datos';
@Component({
  selector: 'app-Grafica',
  templateUrl: './Grafica.component.html',
  styleUrls: ['./Grafica.component.css']
})
export class GraficaComponent implements OnChanges {
  @Input() Datos:any;
  suma:Number;
  chart1: any;
  chart2: any;
  ngOnInit() {
   this.createChart();
   this.createChart2();
  }
  
  constructor(){
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['Datos'] && changes['Datos'].currentValue) {
      this.actualizarGrafica();
      
    }
    
  }
  Suma(){
    this.suma=this.Datos.porDebajo+this.Datos.porEncima
   }
  actualizarGrafica(){
    this.Suma();
    if (this.chart1) {
      // Actualizar los datos de la gráfica
      this.chart1.data.datasets[0].data = this.Datos.numeros;
     
      // Llamar al método update() para redibujar la gráfica con los nuevos datos
      this.chart1.update();
 
    } 
    if (this.chart2) {
      // Actualizar los datos de la gráfica
      this.chart2.data.datasets[0].data = [this.Datos.porDebajo, this.Datos.cantidadEnRango,this.Datos.porEncima];
     
      // Llamar al método update() para redibujar la gráfica con los nuevos datos
      this.chart2.update();
 
    } 
  }
  createChart() {
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx= (canvas.getContext('2d')as CanvasRenderingContext2D);

    this.chart1 = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Menor a 14cm', '14cm', '15cm','16cm','17cm','18cm','19cm','20cm','21cm','22cm','23cm','24cm','25cm','26cm','27cm','28cm','29cm','30cm',"Mayor a 30"],
        datasets: [{
          label: 'Datos de ejemplo',
          data: [],
          backgroundColor: ['#F0C81E','#F0C81E','#F0C81E','#F0C81E','rgba(0, 175, 0, 0.85)','rgba(0, 175, 0, 0.85)','rgba(0, 175, 0, 0.85)','rgba(0, 175, 0, 0.85)','rgba(0, 175, 0, 0.85)','rgba(0, 175, 0, 1)','rgba(0, 175, 0, 1)','rgba(0, 175, 0, 1)','rgba(0, 175, 0, 1)','rgba(0, 175, 0, 1)','rgba(0, 175, 0, 1)','rgba(225, 0, 0, 1)', 'rgba(225, 0, 0, 1)', 'rgba(225, 0, 0, 1)','rgba(225, 0, 0, 1)'],
          borderColor: ['rgba(0, 0, 0, 1)'],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          title: {
              display: true,
              text: 'Tamaño de brocolis detectados',
              font: {
                  
                  size: 22,
                  weight: 'bold'
              }
          }
      },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  createChart2() {
    const canvas = document.getElementById('myCircle') as HTMLCanvasElement;
    const ctx= (canvas.getContext('2d')as CanvasRenderingContext2D);

    this.chart2 = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Menor a 16cm','16-27cm','Mayor a 27cm'],
        datasets: [{
          label: 'Datos de ejemplo',
          data: [],
          backgroundColor: ['rgba(255, 206, 0, 0.7)', 'rgba(0, 196, 0, 0.6)','rgba(255,0, 0, 0.7)'],
          borderColor: ['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)','rgba(0, 0, 0, 1)' ],
          borderWidth: 1.2
        }]
      },
      options: {
        plugins: {
          title: {
              display: true,
              text: 'Categoria por tamaño',
              font: {
                  size: 22,
                  weight: 'bold'
              }
          }
      },
        scales: {
          y: {
            beginAtZero: true
          }
        }
        
      }
      
    });
  }
}