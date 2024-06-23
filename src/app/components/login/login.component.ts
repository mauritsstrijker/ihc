import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastService } from '../../core/services/toast.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule, TabViewModule, InputTextModule, ButtonModule, ReactiveFormsModule, NgxMaskDirective, NgxMaskPipe],providers: [provideNgxMask()],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  router = inject(Router);
  toastService = inject(ToastService);
  formLogin!: FormGroup;
  formCadastro!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formLogin = this.fb.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required],
    });
    this.formCadastro = this.fb.group({
      nome: ['', Validators.required],
      cnpj: ['', Validators.required],
      contato: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
    });
  }

  login() {
    if (this.formLogin.valid) {
      this.toastService.notify('Login', 'Login realizado com sucesso!');
      this.router.navigate(['home']);
    } else {
      Object.values(this.formLogin.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  cadastrar() {
    if (this.formCadastro.valid) {
      this.toastService.notify('Cadastro', 'Cadastro realizado com sucesso!');
    } else {
      Object.values(this.formCadastro.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
}
