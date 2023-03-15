import { HttpClient } from '@angular/common/http';
import { MeditateService } from './../meditate.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
@Component({
  selector: 'app-songdialog',
  templateUrl: './songdialog.component.html',
  styleUrls: ['./songdialog.component.css'],
})
export class SongdialogComponent {
  id = '';
  image = '';
  song = '';
  constructor(public http: HttpClient, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((data) => {
      this.id = data['id'];
      this.image = data['image'];
      this.song = data['song'];
    });
    console.log(this.song);
  }
  playsong: any;
  imgName: any;
  ngOnInit(): void {
    this.http
      .get('http://localhost:3000/Meditations/' + this.id)
      .subscribe((res) => {
        this.playsong = res;
        console.log(this.playsong.title);
      });
  }
}
