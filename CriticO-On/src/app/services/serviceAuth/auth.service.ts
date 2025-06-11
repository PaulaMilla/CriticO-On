import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  constructor(private http: HttpClient) {}

  register(data: RegisterData): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  login(datos: { correo: string; password: string }) {
    return this.http.post(`${this.apiUrl}/login`, datos);
  }
  
}
