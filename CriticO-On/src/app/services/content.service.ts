import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/api/content';

  getRecientes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/recientes`);
  }

}
