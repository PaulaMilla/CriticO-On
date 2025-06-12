import { Component, inject, signal } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-peliculas-genero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './peliculas-genero.component.html',
  styleUrl: './peliculas-genero.component.css'
})
export class PeliculasGeneroComponent {
  private route = inject(ActivatedRoute);
  private categoriaService = inject(CategoriaService);

  genero = signal<string>('');
  peliculas = signal<any[]>([]);

  constructor() {
    this.genero.set(this.route.snapshot.paramMap.get('genero') || 'Desconocido');

    this.categoriaService.getPeliculasPorGenero(this.genero()).subscribe(data => {
      this.peliculas.set(data);
    });
  }
}
