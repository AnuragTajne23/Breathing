import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor(private http:UserserviceService){}

  hide = true;
  title = 'loginuser';
  loginuser = new FormGroup({
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
    return this.loginuser.get('fname');
  }
  get email() {
    return this.loginuser.get('email');
  }
  get password() {
    return this.loginuser.get('password');
  }
  signing(){
this.http.loginName(this.loginuser.value)
  }
}
