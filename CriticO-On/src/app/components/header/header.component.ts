import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffcanvasComponent } from "../offcanvas/offcanvas.component";
import { AuthServiceService } from '../../services/serviceAuth/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [OffcanvasComponent, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isAuthenticated = false;
  user: any; 

  constructor(private router: Router, private authService: AuthServiceService ){}

  ngOnInit(): void {
    this.authService.authStatus$.subscribe(status => {
      this.isAuthenticated = status;
      this.user = this.authService.getLoggedInUser();
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToSignIn() {
    this.router.navigate(['/signin']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  goToHome() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.router.navigate(['/home']); 
  }
}
