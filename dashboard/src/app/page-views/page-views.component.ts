import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

enum PageType {
  ABOUT = 'about',
  PRODUCTS = 'products',
  PRICING = 'pricing',
}

interface Page {
  name: PageType,
  views: number,
}

@Component({
  selector: 'app-page-views',
  templateUrl: './page-views.component.html',
  styleUrls: ['./page-views.component.scss']
})
export class PageViewsComponent implements OnInit, OnDestroy {
  basicData: any;
  basicOptions: any;
  today = new Date()
  url = `http://localhost:3000/api/pageViews?date=${this.today}`;

  private sub?: Subscription;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
     //this should normally go in a service...
     this.sub = this.httpClient.get<Page[]>(this.url).subscribe((data) => {
      const labels = data.map(element => element.name);
      const dataset = data.map(element => element.views);

      this.basicData = {
        labels: labels,
        datasets: [
          {
            label: 'Number of users per page',
            data: dataset,
            fill: false,
            backgroundColor: '#42A5F5',
          }
        ],
        
      };
    });
  }

  public ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }

}
