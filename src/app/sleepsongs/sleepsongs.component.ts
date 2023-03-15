import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sleepsongs',
  templateUrl: './sleepsongs.component.html',
  styleUrls: ['./sleepsongs.component.css']
})
export class SleepsongsComponent implements OnInit {
  id: any;
  playsong: any;
  constructor(public http: HttpClient, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((data) => {
      this.id = data['id'];
    });
  }
  ngOnInit(): void {
    this.http
    .get('http://localhost:3000/sleep/' + this.id)
    .subscribe((res) => {
      this.playsong = res;
      console.log(this.playsong.title);
    });
  }
}
