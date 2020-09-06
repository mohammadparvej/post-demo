// Angular 
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Model
import { LogInModel } from '../../../shared/models/login.model';

// Services
import { ToastService } from 'src/app/shared/services/toast.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})

export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  public hideForms: boolean = true;
  public error: string;

  public logInModel: LogInModel = {
    email: '',
    password: ''
  }

  constructor(
    private fb: FormBuilder,
    private toastService: ToastService,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.signInForm();
  }

  signInForm() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required]],
      password: ['']
    })
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  logIn() {
      if (this.loginForm.valid) {
        this.auth.sendToken(this.loginForm.value.email);
        this.router.navigate(['/dashboard']);
        this.toastService.showSuccess({ message: 'Admin login succesfully' });
      }
  }
}

