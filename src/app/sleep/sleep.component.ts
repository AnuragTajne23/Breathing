import { Router } from '@angular/router';
import { MeditateService } from './../meditate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sleep',
  templateUrl: './sleep.component.html',
  styleUrls: ['./sleep.component.css'],
})
export class SleepComponent implements OnInit {
  constructor(public http: MeditateService, private Router: Router) {}

  data: any;
  ngOnInit(): void {
    this.http.sleep().subscribe((res) => {
      this.data = res;
    });
  }
  deepsleep(data: any) {
    this.Router.navigate(['/sleepsongs', { id: data }]);
  }
}
