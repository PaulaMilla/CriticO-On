import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

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

interface User {
  id_usuario: number;
  nombre: string;
  alias: string;
  correo: string;
  rol: string;
  url_avatar?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private apiUrl = 'http://localhost:3000/api/auth';
  private authStatus = new BehaviorSubject<boolean>(this.isLoggedIn());
  authStatus$ = this.authStatus.asObservable();

  // Nuevo BehaviorSubject para el usuario actual
  private currentUserSubject = new BehaviorSubject<User | null>(this.getLoggedInUser());
  currentUser$ = this.currentUserSubject.asObservable();

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
          this.currentUserSubject.next(res.user); // Actualizar usuario actual
        }
      })
    );
  }
  
  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth_token');
  }
  
  getLoggedInUser(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  // Nueva función para verificar si el usuario es admin
  isAdmin(): boolean {
    const user = this.getLoggedInUser();
    return user ? user.rol === 'admin' : false;
  }

  // Función para obtener el rol del usuario
  getUserRole(): string | null {
    const user = this.getLoggedInUser();
    return user ? user.rol : null;
  }

  // Función para obtener el usuario actual como observable
  getCurrentUser(): Observable<User | null> {
    return this.currentUser$;
  }
  
  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    this.authStatus.next(false);
    this.currentUserSubject.next(null); // Limpiar usuario actual
  }
}