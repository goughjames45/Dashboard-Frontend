import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platform-activity',
  templateUrl: './platform-activity.component.html',
  styleUrls: ['./platform-activity.component.scss']
})
export class PlatformActivityComponent implements OnInit {

  data: any;
  constructor() { }

  ngOnInit(): void {
    this.data = {
      labels: ['A','B','C'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]    
    };
  }

}
