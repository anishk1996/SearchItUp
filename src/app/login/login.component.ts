import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailId: string = '';
  password: any = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem('isLoggedIn', 'false');
  }

  setValue() {
    console.log('Email id is', this.emailId);
    console.log('Password is', this.password);
    if (this.emailId == 'anishkumarrocks11@gmail.com' && this.password == 'qwerty123') {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/home']);
    } else {
      this.emailId = '';
      this.password = '';
      // this.toastr.error('Email id or password is incorrect');
      localStorage.setItem('isLoggedIn', 'false');
    }
  }

}
