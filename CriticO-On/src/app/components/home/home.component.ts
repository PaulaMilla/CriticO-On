import { Component } from '@angular/core';
import { PopularesComponent } from "../populares/populares.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PopularesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
