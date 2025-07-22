import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';

export interface Review {
  id_review: number;
  comentario: string;
  rating: number;
  cantidad_likes: number;
}

export interface SeriePelicula {
  id: number;
  url_foto: string;
}

export interface PopularItem {
  seriePelicula: SeriePelicula;
  reviews: Review[];
}

@Injectable({
  providedIn: 'root',
})
export class PopularesService {
  private apiUrl = '/api/content/populares'; // Proxy configurado

  constructor(private http: HttpClient) {}

  getPopulares(): Observable<PopularItem[]> {
    return this.http.get<PopularItem[]>(this.apiUrl);
  }
}

