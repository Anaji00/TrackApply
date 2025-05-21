import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [FormsModule]
})
export class LoginComponent {
  username = '';
  password = '';

  private authService = inject(AuthService);
  private router = inject(Router);

  login() {
    this.authService.login({ username: this.username, password: this.password }).subscribe({
      next: () => this.router.navigate(['/jobs']),
      error: () => alert('Login failed')
    });
  }
}
