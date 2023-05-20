import { Component, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ChartComponent } from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors: any;
};

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: ChartOptions = {
    series: [56, 56, 56, 56, 36, 46, 46, 75, 46, 56],
    chart: {
      width: '100%',
      type: 'pie',
    },
    colors: ['#16BB7B', '#16BB7B', '#F9C545', '#FE8B56', '#037DAA', '#068ABB', '#0097CF', '#52B8DE', '#4FECB0', '#23D691'],
    labels: ['Credit Card Info', 'Web Login Issue', 'Debit Card Info', 'Debit Card PIN Change', 'Credit Card Blocking', 'Mobile Application Issues', 'Change Credit Card PIN', 'Information', 'Credit Card Bill Payment'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  refreshIconUrl: SafeResourceUrl;
  dotIconUrl: SafeResourceUrl;
  editIconUrl: SafeResourceUrl;
  deleteIconUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.refreshIconUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/refresh-icon.svg');
    this.dotIconUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/dots-icon.svg');
    this.editIconUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/edit-icon.svg');
    this.deleteIconUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/delete-icon.svg');
  }

  topicOptions: any[] = [
    { label: 'Last Month', checked: true },
    { label: '2 Weeks', checked: false },
    { label: '1 Week', checked: false },
    { label: 'Last 24 Hrs', checked: false },
  ];
  queueOptions: any[] = [
    { label: 'Last 24 Hrs', checked: true },
    { label: 'Last Week', checked: false },
  ]
}
