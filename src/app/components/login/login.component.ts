import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  spinner: boolean = false;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.login = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get username() {
    return this.login.get('username');
  }
  get password() {
    return this.login.get('password');
  }

  submit(body: any) {
    this.loginService.getLogin(body).subscribe((res) => {
      localStorage.setItem('token', res.token);
      this.router.navigateByUrl('main');
    });
    this.spinner = true;
  }
}
