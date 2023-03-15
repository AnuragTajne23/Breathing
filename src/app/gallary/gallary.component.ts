import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MeditateService } from '../meditate.service';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css'],
})
export class GallaryComponent {
  constructor(private http: MeditateService, private Router: Router) {}
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
