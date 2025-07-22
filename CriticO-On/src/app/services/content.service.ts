import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Contenido {
  id_sp: number;
  nombre: string;
  descripcion: string;
  fecha: string;
  url_foto: string;
  temporadas: number;
}

@Injectable({
  providedIn: 'root'
})

export class ContentService {

  private apiUrl = '/api/content';

  constructor(private http: HttpClient) {}

  getContenido(id: number): Observable<Contenido> {
    return this.http.get<Contenido>(`${this.apiUrl}/${id}`);
  }

  getRecientes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/recientes`);
  }

  getReviewsByContenido(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${id}/reviews`);
  }

  getAllContenido(): Observable<{ data: Contenido[] }> {
    return this.http.get<{ data: Contenido[] }>(`${this.apiUrl}/serie_pelicula`);
  }


}
