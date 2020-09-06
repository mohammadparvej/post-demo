// Angular
import { Component, OnInit } from '@angular/core';

// Services
import { UsersService } from '../../services/users.service';

// Models
import { UsersModel } from '../../../shared/models/users.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  public users: UsersModel[];
  
  ngOnInit(): void {
	  this.usersService.getUsers().subscribe(users => {
	     this.users = users;
  	  });
  }

}
