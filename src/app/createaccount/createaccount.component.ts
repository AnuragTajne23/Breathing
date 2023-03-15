import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css'],
})
export class CreateaccountComponent {
  constructor(private http: UserserviceService , private router:Router) {}
  hide = true;
  title = 'loginform';
  loginform = new FormGroup({
    fname: new FormControl('', [
      Validators.required,
      Validators.pattern(
        "^([A-Za-z]{2,}\\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\\s?([a-zA-Z]{1,})?)"
      ),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z]).{8,30}'),
    ]),
  });
  get fname() {
    return this.loginform.get('fname');
  }
  get email() {
    return this.loginform.get('email');
  }
  get password() {
    return this.loginform.get('password');
  }
  signup() {
    this.http.userlogin(this.loginform.value).subscribe((res) => {
      if(res){
        alert("Registration Successful")
        this.router.navigate(['/login'])
      }
    });
  }
}
