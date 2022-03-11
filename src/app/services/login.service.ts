import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private Http: HttpClient, private router: Router) {}

  url = 'https://fakestoreapi.com/auth/login';

  getLogin(body: any) {
    return this.Http.post<any>(this.url, body);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  get Token() {
    return localStorage.getItem('token');
  }
}
