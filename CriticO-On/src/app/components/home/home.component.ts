import { Component } from '@angular/core';
import { PopularesComponent } from "../populares/populares.component";
import {CarruselComponent} from "../carrusel/carrusel.component";
import {CommonModule} from "@angular/common";
import { CategoriaCarruselComponent } from '../categoria-carrusel/categoria-carrusel.component';
import { PeliculasGeneroComponent } from '../peliculas-genero/peliculas-genero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarruselComponent, PopularesComponent, CategoriaCarruselComponent, PeliculasGeneroComponent],
  template: `
    <app-carrusel></app-carrusel>
    <app-populares></app-populares>
    <app-categoria-carrusel></app-categoria-carrusel>

  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
