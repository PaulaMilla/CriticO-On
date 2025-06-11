import { Component } from '@angular/core';
import { PopularesComponent } from "../populares/populares.component";
import {CarruselComponent} from "../carrusel/carrusel.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarruselComponent, PopularesComponent],
  template: `
    <app-carrusel></app-carrusel>
    <app-populares></app-populares>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
