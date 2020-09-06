// Angular
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

// services
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    isExistToken: boolean;
    constructor(private auth: AuthService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.auth.isLoggedIn()){
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
    }

}
