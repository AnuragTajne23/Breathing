import { MeditateService } from './../meditate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  mydate = new Date();
  hour = this.mydate.getHours();
  Wish = `Good ${
    (this.hour < 12 && 'Morning') ||
    (this.hour < 17 && 'Afternoon') ||
    (this.hour < 20 && 'Evening') ||
    (this.hour < 24 && 'Night')
  }`;

  constructor(private http: MeditateService) {}
  imgName: any;
  ngOnInit(): void {
    this.http.meditate().subscribe((res) => {
      this.imgName = res;
    });
  }
  username = window.localStorage.getItem('userName');
}
