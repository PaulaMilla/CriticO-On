import { Component } from '@angular/core';
import { PopularesComponent } from "../populares/populares.component";
import {CarruselComponent} from "../carrusel/carrusel.component";
import {CommonModule} from "@angular/common";
import { CategoriaCarruselComponent } from '../categoria-carrusel/categoria-carrusel.component';
import { PeliculasGeneroComponent } from '../peliculas-genero/peliculas-genero.component';
import {AllContentComponent} from "../allcontent/allcontent.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarruselComponent, PopularesComponent, CategoriaCarruselComponent, PeliculasGeneroComponent, AllContentComponent],
  template: `
    <app-carrusel></app-carrusel>
    <app-populares></app-populares>
    <app-categoria-carrusel></app-categoria-carrusel>
    <app-allcontent></app-allcontent>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
