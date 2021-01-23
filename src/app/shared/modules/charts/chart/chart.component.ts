import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import * as Chart from 'chart.js';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  // unique Id is required each chart in the app
  @Input() id;
  @Input() type;
  @Input() data;
  @Input() options;
  @Input() canvasHeight;
  @Input() canvasWidth;
  canvas: any;
  ctx: any;
  chartData: any;

  constructor() { }
  // ngAfterViewInit() {

  // }

  ngOnInit() {


    this.chartData = {
      datasets: [{
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        data: [10, 20, 30, 40, 50, 60, 70]
      }]
    };
    if (this.id) {
      setTimeout(() => {
        this.getChart(this.data);
      }, 1000);
    }
  }

  getChart(data) {
    this.canvas = document.getElementById(this.id);
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: ['Jan 20', 'Feb 20', 'Mar 20', 'Apr 20', 'May 20', 'Jun 20', 'Jul 20', 'Aug 20', 'Sept 20'],
        datasets: [{
          data: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
          label: '',
          backgroundColor: [
            'rgba(255, 255, 255, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        // display: true
      }
    });
  }


}

