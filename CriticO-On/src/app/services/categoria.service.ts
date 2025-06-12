import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiUrl = 'http://localhost:3000/api/categorias';

  constructor(private http: HttpClient) {}

  getPeliculasPorGenero(genero: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/genero/${genero}`);
  }
}
