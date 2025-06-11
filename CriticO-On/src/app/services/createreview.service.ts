import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreatereviewService {
  private apiUrl= 'http://localhost:3000/api/review';
  constructor(private http: HttpClient) { }

  createReview(review:{
    comentario: string;
    rating: number;
    spoiler: boolean;
    userId: number;
    contentId: number;
  }){
    return this.http.post(this.apiUrl, review);
  }
}
