import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PopularesComponent } from "./components/populares/populares.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PopularesComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CriticO-On';


}
