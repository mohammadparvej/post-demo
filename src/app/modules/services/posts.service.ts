// Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Rxjs
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';

// Models
import { PostsModel } from '../../shared/models/posts.model';

// Set Headers
const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json; charset=UTF-8',
  })
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

 private postsUrl: string ='https://jsonplaceholder.typicode.com/posts';
  constructor(
    private http: HttpClient,
  ) { }

  getPost(id: number): Observable<PostsModel> {
    return this.http.get<PostsModel>(`${this.postsUrl}/${id}`)
  }

  getPosts(): Observable<PostsModel[]> {
    return this.http.get<PostsModel[]>(`${this.postsUrl}?_sort=views&_order=desc`)
  }

  addPost(post: PostsModel): Observable<PostsModel> {
    return this.http.post<PostsModel>(this.postsUrl, post, httpOptions) 
  }
  getData(): Observable<any> {
  const posts =  this.http.get('https://jsonplaceholder.typicode.com/posts') ;
  const comments =  this.http.get('https://jsonplaceholder.typicode.com/comments');
  const users =  this.http.get('https://jsonplaceholder.typicode.com/users');
  return forkJoin([posts, comments, users]);
}

  deletePost(id) {  
    return this.http.delete(this.postsUrl + '/' + id);  
  }
}
