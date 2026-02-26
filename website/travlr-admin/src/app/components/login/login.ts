import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent
{
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute)
  {

  }

  onLogin()
  {
    this.error = '';
    this.auth.login(this.email, this.password).subscribe({
      next: () =>
      {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        this.router.navigateByUrl(returnUrl);
      },
      error: () => this.error = 'Login failed'
    });
  }
}