import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

enum PlatformType {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  DESKTOP = 'desktop',
}

interface Platform {
  platformType: PlatformType,
  visits: number,
}

@Component({
  selector: 'app-platform-activity',
  templateUrl: './platform-activity.component.html',
  styleUrls: ['./platform-activity.component.scss']
})
export class PlatformActivityComponent implements OnInit {

  data: any;
  today = new Date();
  url = `http://localhost:3000/api/platformUsage?date=${this.today}`;

  private sub?: Subscription;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    //this should normally go in a service...
    this.sub = this.httpClient.get<Platform[]>(this.url).subscribe((data) => {
      const labels = data.map(element => element.platformType);
      const dataset = data.map(element => element.visits);

      this.data = {
        labels: labels,
        datasets: [
          {
            label: 'Number of users per platform',
            data: dataset,
            fill: false,
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
            ],
          }
        ],
        
      };
    });

  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }

}
