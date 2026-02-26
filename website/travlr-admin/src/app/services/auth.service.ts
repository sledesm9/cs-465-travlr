import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService
{
  private apiBaseUrl = '/api';
  constructor(private http: HttpClient)
  {

  }

  login(email: string, password: string): Observable<any>
  {
    return this.http.post(`${this.apiBaseUrl}/login`, { email, password }).pipe(tap((res: any) => localStorage.setItem('token', res.token)));
  }

  logout()
  {
    localStorage.removeItem('token');
  }

  getToken(): string | null
  {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean
  {
    return !!this.getToken();
  }
}