import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { Datos_Grafica, Datos_Observacion } from 'src/app/Datos';
@Component({
  selector: 'app-GraficaPapas',
  templateUrl: './GraficaPapas.component.html',
  styleUrls: ['./GraficaPapas.component.css']
})
export class GraficaPapasComponent implements OnChanges {
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
      //this.chart2.data.datasets[0].data = [this.Datos.porDebajo, this.Datos.cantidadEnRango,this.Datos.porEncima];
      this.chart2.data.datasets[0].data = this.Datos.numeros;
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
        labels: ['Sexta', 'Quinta', 'Cuarta','Tercera','Segunda','Primera','Suprema'],
        datasets: [{
          label: 'Datos de ejemplo',
          data: [],
          backgroundColor: ['rgba(0, 175, 0, 0.85)'],
          borderColor: ['rgba(0, 0, 0, 1)'],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          title: {
              display: true,
              text: 'Tamaño de papas detectadas',
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
        labels: ['Sexta', 'Quinta', 'Cuarta','Tercera','Segunda','Primera','Suprema'],
        datasets: [{
          label: 'Datos de ejemplo',
          data: [],
          backgroundColor: ['rgba(255, 206, 0, 0.7)'],
          borderColor: ['#F0C81E','#F0C81E','#F0C81E','#F0C81E','rgba(0, 175, 0, 0.85)','rgba(0, 175, 0, 0.85)','rgba(0, 175, 0, 0.85)'],
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