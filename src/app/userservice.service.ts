import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  constructor(private http: HttpClient, private router: Router) {}

  userinfo: any;

  userlogin(data: any) {
    return this.http.post('http://localhost:3000/user', data);
  }
  loginName(item: any) {
    this.http.get<any>('http://localhost:3000/user').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return a.email === item.email && a.password === item.password;
        });
        if (user) {
          alert('Login Successful');
          this.router.navigate(['getstart']);
          this.userinfo = user;
          localStorage.setItem('userName', JSON.stringify(user.fname));

          localStorage.setItem('email', JSON.stringify(user.email));
        } else {
          alert('Login Failed');
        }
      },
      (err) => {
        alert('Something Went Wrong');
      }
    );
  }
}
