// Angular
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

// Model
import { PostsModel } from '../../../shared/models/posts.model';
import { UsersModel } from '../../../shared/models/users.model';

// Service
import { PostsService } from '../../services/posts.service';
import { UsersService } from '../../services/users.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  public postForm: FormGroup;
  public posts: PostsModel[];
  public users: UsersModel[];
  public update;
  public isUpdateCreate = true;
  public submitData;
  public index;
  public newArray = [];
  constructor(
    private postsService: PostsService,
    private usersService: UsersService,
    private fb: FormBuilder,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: [null, [Validators.required]],
      body: ['']
    })

    // get posts , users and comment data with 5 comments
    this.postsService.getData().subscribe(posts => {
      posts[0].forEach((value, index) => {
        this.newArray = [];
        for (var j = 0; j < posts[1].length; j++) {
          if (value.id == posts[1][j].postId) {
            this.newArray.push(posts[1][j])
          }
          value['comments'] = this.newArray;
        }
        for (var k = 0; k < posts[2].length; k++) {
          if (value.userId == posts[2][k].id) {
            value['name'] = posts[2][k].name
            value['email'] = posts[2][k].email
            value['website'] = posts[2][k].website
          }
        }
      });
      this.posts = posts[0];
    });
  }

  // submit data for update and create posts
  submitPost(): void {
    if (this.isUpdateCreate == true) {        // for static create posts  
      this.submitData = {
        id: this.posts.length + 1,
        title: this.postForm.value.title,
        body: this.postForm.value.title,
        email: "static@gmail.com",
        website: "www.static.com"
      }
      this.postsService.addPost(this.submitData)
        .subscribe(response => {
          this.posts.push(this.submitData);
          this.posts.reverse();
          this.toastService.showSuccess({ message: 'Post create succesfully' });
        });
    } else {                                                      // for update posts
      this.posts[this.index].title = this.postForm.value.title;
      this.posts[this.index].body = this.postForm.value.body;
      this.isUpdateCreate = true;
      this.toastService.showSuccess({ message: 'Post update succesfully' });
    }
    this.postForm.reset();
  }

  // delete post data
  delete(deleteData): void {
    this.postsService.deletePost(deleteData.id).subscribe(posts => {
      let index = this.posts.indexOf(deleteData);
      this.posts.splice(index, 1);
      this.toastService.showSuccess({ message: 'Post delete succesfully' });
    })
  }

  // update post data
  updatePost(updateData, value, index): void {
    this.isUpdateCreate = value;
    this.index = index;
    this.update = updateData;
    this.postForm.setValue({
      title: updateData.title,
      body: updateData.body
    });
  }
}