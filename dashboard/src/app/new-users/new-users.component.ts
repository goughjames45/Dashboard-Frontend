import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

interface Users {
  date: Date,
  numUsers: number,
}

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.scss']
})
export class NewUsersComponent implements OnInit, OnDestroy {
  basicData:any;
  basicOptions: any;
  url = "http://localhost:3000/api/users"

  private sub?: Subscription;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    //this should normally go in a service...
    this.sub = this.httpClient.get<Users[]>(this.url).subscribe((data) => {
      const labels = data.map(element => element.date.toString().slice(0,10));
      const dataset = data.map(element => element.numUsers);

      this.basicData = {
        labels: labels,
        datasets: [
          {
            label: 'Number of users over time',
            data: dataset,
            fill: false,
            borderColor: '#42A5F5',
          }
        ],
        
      };
    });

  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }

}
