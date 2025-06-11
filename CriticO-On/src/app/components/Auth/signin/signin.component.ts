import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../../services/serviceAuth/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  constructor(private router: Router, public authService: AuthServiceService) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }


  nombre = '';
  alias = '';
  correo = '';
  password = '';

  onRegister() {
    this.authService
      .register({
        nombre: this.nombre,
        alias: this.alias,
        correo: this.correo,
        password: this.password,
      })
      .subscribe({
        next: (res) => {
          console.log('Usuario registrado', res);
          alert('Registro exitoso');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Error en registro', err);
          alert('Error al registrar usuario');
        },
      });
  }
}
