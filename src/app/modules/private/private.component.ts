// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Rxjs
import { Subscription } from 'rxjs';

// services
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit{
  loggedIn;
  constructor(private auth: AuthService,
  ) {
  }

  ngOnInit() {
  this.loggedIn =  this.auth.isLoggedIn();
  }

  logout() {
     this.auth.logout();
  } 
}
