import { Router } from '@angular/router';
import { MeditateService } from './../meditate.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-meditation',
  templateUrl: './meditation.component.html',
  styleUrls: ['./meditation.component.css']
})
export class MeditationComponent {
  constructor(private http:MeditateService, private Router: Router) {}
  imgName: any;
  ngOnInit(): void {
    this.http.meditate().subscribe((res) => {
      this.imgName = res;
    });
  }
  Songs(data: any) {
    this.Router.navigate(['/songdialog', { id: data }]);
  }
}
