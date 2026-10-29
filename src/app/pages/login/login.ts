import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';
  loading = false;
  errorMessage = '';

  constructor(private router: Router) {}

  login(): void {
    this.errorMessage = '';

    if (!this.email.trim() || !this.password) {
      this.errorMessage = 'Preencha o e-mail e a senha.';
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email.trim())) {
      this.errorMessage = 'Informe um e-mail válido.';
      return;
    }

    // Login demonstrativo: ainda não autentica de verdade.
    console.log('E-mail informado:', this.email.trim());
    console.log('Solicitação de login validada no frontend.');

    this.router.navigate(['/tasks']);
  }
}
