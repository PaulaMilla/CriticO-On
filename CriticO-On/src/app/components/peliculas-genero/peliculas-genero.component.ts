import { Component, inject, signal, effect } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-peliculas-genero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './peliculas-genero.component.html',
  styleUrl: './peliculas-genero.component.css'
})
export class PeliculasGeneroComponent {
  private route = inject(ActivatedRoute);
  private categoriaService = inject(CategoriaService);

  genero = signal<string>(''); 
  peliculas = signal<any[]>([]); 

  constructor(private router: Router) {
    this.route.paramMap.subscribe(params => {
      const generoParam = params.get('genero') || 'Desconocido';
      this.genero.set(generoParam);
    });

    effect(() => {
      const actualGenero = this.genero();
      if (actualGenero && actualGenero !== 'Desconocido') {
        this.categoriaService.getPeliculasPorGenero(actualGenero).subscribe(data => {
          this.peliculas.set(data);
        });
      }
    });
  }

  verDetalles(id: number) {
    console.log('Navegando a ID:', id); // Para debug
    this.router.navigate(['/content', id]);
  }

}
