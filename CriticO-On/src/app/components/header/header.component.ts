import { Component } from '@angular/core';
import { OffcanvasComponent } from "../offcanvas/offcanvas.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [OffcanvasComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
