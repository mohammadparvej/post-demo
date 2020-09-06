
// Angular 
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private myRoute: Router) { }

  // set user if login
  sendToken(token: string) {
    localStorage.setItem("LoggedInUser", token)
  }

  // check login user or not
  isLoggedIn() {
    if (localStorage.getItem('LoggedInUser')) {
      return true;
    }
    return false;
  }

  // logout
  logout() {
    localStorage.removeItem("LoggedInUser");
    this.myRoute.navigate(['']);
  }
}
