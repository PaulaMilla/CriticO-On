import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from '../../../services/serviceAuth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  correo: string = '';
  password: string = '';

  constructor(private authService: AuthServiceService, private router: Router) {}

  login() {
    const datos = {
      correo: this.correo,
      password: this.password
    };
  
    this.authService.login(datos).subscribe({
      next: (res) => {
        console.log('Login exitoso', res);
        this.router.navigate(['/home']);
        // redirigir o guardar token, etc.
      },
      error: (err) => {
        console.error('Error en login', err);
      }
    });
  }
  
  goToSignIn() {
    this.router.navigate(['/signin']);
  }

}
