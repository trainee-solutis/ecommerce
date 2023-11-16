import { Component, OnInit } from '@angular/core';
import { NgChartsConfiguration } from 'ng2-charts';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-purchases-historic',
  templateUrl: './purchases-historic.component.html',
  styleUrls: ['./purchases-historic.component.css']
})
export class PurchasesHistoricComponent implements OnInit{
    ngOnInit(): void {
      console.log(this.getSalesDataForLastMonths());

    }

    salesData: { date: Date, value: number }[] = [
    { date: new Date(2022, 0), value: 20 }, // January
    { date: new Date(2022, 1), value: 30 }, // February
    { date: new Date(2022, 2), value: 40 }, // March
    { date: new Date(2022, 3), value: 20 }, // April
    { date: new Date(2022, 4), value: 30 }, // May
    { date: new Date(2022, 5), value: 40 }, // june
    { date: new Date(2022, 6), value: 50 }, // july
    { date: new Date(2022, 7), value: 60 }, //August
    { date: new Date(2022, 8), value: 60 }, //September
    { date: new Date(2022, 9), value: 60 }, //Octuber
    { date: new Date(2022, 10), value: 70 }, // November
    { date: new Date(2022, 11), value: 70 }, // December
  ];

  getSalesDataForLastMonths() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;

    const retornoApi = 6;

    // Calcular o índice de início corretamente
    const startIndex = Math.max(0, currentMonth - retornoApi);

    // Usar o método slice corretamente para obter os meses recortados
    const mesesRecortados = this.salesData.slice(startIndex, currentMonth);

    return {
      labels: mesesRecortados.map(item => item.date.toLocaleString('default', { month: 'long' })),
      datasets: [
        {
          data: mesesRecortados.map(item => item.value),
          label: `Vendas dos últimos ${retornoApi} meses`,
        },
      ],
    };
  }

  public graficData: ChartConfiguration<'line'>['data'] = {
    labels:     this.getSalesDataForLastMonths().labels,
    datasets: [
      this.getSalesDataForLastMonths().datasets[0],
    ]
  };

  public graficOptions: ChartOptions<'line'> = {
    responsive: true,
  };

  public graficLegend = true;
}
