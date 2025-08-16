import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, LoginResponse } from '../../types/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  private token: string | null = null;

  constructor(private http: HttpClient) {}

  login(credentials: LoginRequest) {
    return this.http.post<LoginResponse>(`${this.apiUrl}/auth/login`, credentials);
  }

  saveToken(token: string) {
    this.token = token;
    sessionStorage.setItem('access_token', token);
  }

  getToken(): string | null {
    return this.token || sessionStorage.getItem('access_token');
  }

  logout() {
    this.token = null;
    sessionStorage.removeItem('access_token');
  }
}
