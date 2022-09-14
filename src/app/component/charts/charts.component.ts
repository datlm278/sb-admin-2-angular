import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [{
      label: "Revenue",
      backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4e73df",
      data: [4215, 5312, 6251, 7841, 9821, 14984],
    }]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    scales: {
      x: {
        time: {
          unit: "month"
        },
        grid: {
          display: true,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 12,
        },
      },
      y: {
        ticks: {
          maxTicksLimit: 5,
        },
        grid: {
          color: "rgb(234, 236, 244)",
          borderColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          lineWidth: [2]
        },
        min: 0
      }
    },
    plugins: {
      legend: {
        display: false,
      }
    }
  };

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Earnings",
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(78, 115, 223, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
      fill: "start",
    }]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    elements: {
      line: {
        tension: 0.3
      }
    },
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    }
  };
  public lineChartLegend = true;

  constructor() { }

  ngOnInit(): void {
  }

}
