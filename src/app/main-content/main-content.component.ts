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
  progress: number = 50;

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
  loggedIconUrl: SafeResourceUrl;
  readyIconUrl: SafeResourceUrl;
  notReadyIconUrl: SafeResourceUrl;
  busyIconUrl: SafeResourceUrl;
  timeIconUrl: SafeResourceUrl;
  availableAgentIconUrl: SafeResourceUrl;
  notAvailableAgentIconUrl: SafeResourceUrl;
  callIconUrl: SafeResourceUrl;
  callInQueueIconUrl: SafeResourceUrl;
  callDeclinedIconUrl: SafeResourceUrl;


  constructor(private sanitizer: DomSanitizer) {
    this.refreshIconUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/refresh-icon.svg');
    this.dotIconUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/dots-icon.svg');
    this.editIconUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/edit-icon.svg');
    this.deleteIconUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/delete-icon.svg');
    this.loggedIconUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/logged-icon.svg');
    this.readyIconUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/ready-icon.svg');
    this.notReadyIconUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/not-ready-icon.svg');
    this.busyIconUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/busy-icon.svg');
    this.timeIconUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/time-icon.svg');
    this.availableAgentIconUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/available-agent-icon.svg');
    this.notAvailableAgentIconUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/agent-not-ready-icon.svg');
    this.callIconUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/calls-icon.svg');
    this.callInQueueIconUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/calls-in-queue-icon.svg');
    this.callDeclinedIconUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/call-declined-icon.svg');
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
  queueStatsOptions:any[] = [
    { label: 'Technical', checked: true },
    { label: 'New Booking', checked: false },
    { label: 'Sales', checked: false },
    { label: 'Support', checked: false },
    { label: 'Credit Card', checked: false },
    { label: 'Feedback', checked: false },
    { label: 'Debit Card', checked: false },

  ]
}
