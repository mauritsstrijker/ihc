import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastService } from '../../core/services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule, TabViewModule, InputTextModule, ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private router: Router) {}

  toastService = inject(ToastService);

  login() {
    this.toastService.notify('Login', 'Login realizado com sucesso!');
    this.router.navigate(['home']);
  }

  cadastrar() {
    this.toastService.notify('Cadastro', 'Cadastro realizado com sucesso!');
  }
}
