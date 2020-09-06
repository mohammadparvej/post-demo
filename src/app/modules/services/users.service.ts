// Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Rxjs
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

// Models
import { UsersModel } from '../../shared/models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersUrl: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<UsersModel[]> {
    return this.http.get<UsersModel[]>(this.usersUrl)
  }
  
}
