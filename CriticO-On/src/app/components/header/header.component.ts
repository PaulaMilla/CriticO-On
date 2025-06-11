import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OffcanvasComponent } from "../offcanvas/offcanvas.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [OffcanvasComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router){}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToSignIn() {
    this.router.navigate(['/signin']);
  }
}
