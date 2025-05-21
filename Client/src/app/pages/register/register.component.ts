import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule] // ✅ Include it in imports array
})
export class RegisterComponent {
  username = '';
  password = '';

  private authService = inject(AuthService);

register() {
  console.log('📤 Submitting registration request...');
  this.authService.register({ username: this.username, password: this.password }).subscribe({
    next: (_res: any) => {
      console.log('✅ Registration response:', _res);
      alert('Registration successful!');
    },
    error: (err: any) => {
      console.error('🔴 Registration error:', err); // Force it to print
      alert('Failed to register');
    }
  });
}

  
}
