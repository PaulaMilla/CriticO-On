import { Component, TemplateRef, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthServiceService } from '../../services/serviceAuth/auth.service';
import { Subscription } from 'rxjs';

interface User {
  id_usuario: number;
  nombre: string;
  alias: string;
  correo: string;
  rol: string;
  url_avatar?: string;
}

@Component({
  selector: 'app-offcanvas',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './offcanvas.component.html',
  styleUrl: './offcanvas.component.css'
})
export class OffcanvasComponent implements OnInit, OnDestroy {
  currentUser: User | null = null;
  isAdmin = false;
  private userSubscription: Subscription = new Subscription();

  constructor(
    private offcanvasService: NgbOffcanvas,
    private authService: AuthServiceService
  ) {}

  ngOnInit(): void {
    // Suscribirse a los cambios del usuario actual
    this.userSubscription = this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      this.isAdmin = this.authService.isAdmin();
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  openCustomPanelClass(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { panelClass: 'bg-info' });
  }

  logout(): void {
    this.authService.logout();
    // Opcionalmente, puedes redirigir o cerrar el offcanvas aquí
  }
}