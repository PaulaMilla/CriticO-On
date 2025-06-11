import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs';

interface RegisterData {
  nombre: string;
  alias: string;
  correo: string;
  password: string;
}

interface LoginData {
  correo: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private apiUrl = 'http://localhost:3000/api/auth';
  private authStatus = new BehaviorSubject<boolean>(this.isLoggedIn());
  authStatus$ = this.authStatus.asObservable();


  constructor(private http: HttpClient) {}

  register(data: RegisterData): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  login(datos: LoginData): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, datos).pipe(
      tap((res: any) => {
        if (res && res.token) {
          localStorage.setItem('auth_token', res.token);
          localStorage.setItem('user', JSON.stringify(res.user));
          this.authStatus.next(true); 
        }
      })
    );
  }
  
  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth_token');
  }
  
  getLoggedInUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
  
  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    this.authStatus.next(false); 
  }

}
