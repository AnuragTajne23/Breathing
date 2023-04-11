import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router:Router){}
  logout(){
    this.router.navigate(['/']);
    window.localStorage.removeItem('userName');
   window.localStorage.removeItem('email');
  }
}
