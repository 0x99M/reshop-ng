import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth, LoginRequest, LoginResponse } from '../../types/auth';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly apiUrl = environment.apiUrl;

  private auth: Auth = { token: '', role: '' };

  constructor(private http: HttpClient) { }

  login(credentials: LoginRequest) {
    return this.http.post<LoginResponse>(`${this.apiUrl}/auth/login`, credentials);
  }

  saveToken(token: string) {
    this.auth.token = token;
    sessionStorage.setItem('access_token', token);
  }

  getToken(): string | null {
    return this.auth.token || sessionStorage.getItem('access_token');
  }

  saveRole(role: string) {
    this.auth.role = role;
    sessionStorage.setItem('user_role', role);
  }

  getRole(): string {
    return this.auth.role || sessionStorage.getItem('user_role') || '';
  }

  logout() {
    this.auth = { token: '', role: '' };
    sessionStorage.removeItem('access_token');
  }
}
