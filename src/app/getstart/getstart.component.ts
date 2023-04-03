import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-getstart',
  templateUrl: './getstart.component.html',
  styleUrls: ['./getstart.component.css']
})
export class GetstartComponent implements OnInit {

constructor(private http:UserserviceService){}

username=window.localStorage.getItem('userName');

ngOnInit(): void {
  console.log(this.username);
}
}
