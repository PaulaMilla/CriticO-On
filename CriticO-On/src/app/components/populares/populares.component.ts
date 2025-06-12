import { Component, OnInit } from '@angular/core';
import {PopularesService, PopularItem, Review} from '../../services/populares.service';
import {CommonModule, NgForOf} from "@angular/common";
import { Router } from '@angular/router';

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

  constructor(private popularesService: PopularesService, private router: Router) {}

  reviewSlides: { review: Review, url_foto: string, id_sp: number }[] = [];

  ngOnInit(): void {
    this.popularesService.getPopulares().subscribe(data => {
      this.populares = data;
      // Aplanar para el carrusel
      this.reviewSlides = data.flatMap(item => {
        return item.reviews.map(review => ({
          review,
          url_foto: item.seriePelicula.url_foto,
          id_sp: item.seriePelicula.id
        }));
      });
    });
  }

  verDetalles(id: number): void {
    this.router.navigate(['/content', id]);
  }
}
