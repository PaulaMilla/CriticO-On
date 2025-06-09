import { Component, OnInit } from '@angular/core';
import {PopularesService, PopularItem, Review} from '../../services/populares.service';
import {CommonModule, NgForOf} from "@angular/common";

@Component({
  selector: 'app-populares',
  standalone: true,
  imports: [
    NgForOf,
    CommonModule
  ],
  templateUrl: './populares.component.html',
  styleUrl: './populares.component.css'
})
export class PopularesComponent implements OnInit{
  populares: PopularItem[] = [];

  constructor(private popularesService: PopularesService) {}

  reviewSlides: { review: Review, url_foto: string }[] = [];

  ngOnInit(): void {
    this.popularesService.getPopulares().subscribe(data => {
      this.populares = data;

      // Aplanar para el carrusel
      this.reviewSlides = data.flatMap(item =>
        item.reviews.map(review => ({
          review,
          url_foto: item.seriePelicula.url_foto
        }))
      );
    });
  }

}
