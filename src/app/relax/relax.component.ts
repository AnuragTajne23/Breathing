import { MeditateService } from './../meditate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relax',
  templateUrl: './relax.component.html',
  styleUrls: ['./relax.component.css'],
})
export class RelaxComponent implements OnInit {
  melodies: any;
  constructor(private http: MeditateService) {}
  ngOnInit(): void {
    this.http.melodies().subscribe((res) => {
      this.melodies = res;
    });
  }
  mSong(song:any){
    let audio=new Audio();
    audio.src=song;
    audio.play();
   }
}
