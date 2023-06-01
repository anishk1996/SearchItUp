import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: any = '';

  constructor() { }

  isLoggedIn() {
    
    this.loggedIn = localStorage.getItem('isLoggedIn');
    if (this.loggedIn == 'true') {
      return true;
    } else {
      return false;
    }
  }
  
}
