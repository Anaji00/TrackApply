import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  baseUrl = 'http://localhost:5062/api/auth';

  constructor(private http: HttpClient) {}

  login(user: User) {
    return this.http.post(this.baseUrl + '/login', user, {
      responseType: 'text' as 'json' // ✅ Expect token as plain text
    }).pipe(
      tap((token: any) => localStorage.setItem('token', token))
    );
  }

  register(user: User) {
    return this.http.post(this.baseUrl + '/register', user, {
      responseType: 'text' as 'json' // ✅ Prevents Angular from trying to parse token
    });
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
