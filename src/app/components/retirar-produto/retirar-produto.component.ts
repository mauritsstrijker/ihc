import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ToastService } from '../../core/services/toast.service';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-retirar-produto',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    InputMaskModule,
    ReactiveFormsModule
  ],
  templateUrl: './retirar-produto.component.html',
  styleUrl: './retirar-produto.component.scss',
})
export class RetirarProdutoComponent implements OnInit{
  router = inject(Router);
  toastService = inject(ToastService);
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      ean: ['', Validators.required],
      quantidade: ['', Validators.required],
      motivo: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => {
        this.router.navigate(['home']);
      },
    },
    {
      label: 'Cadastrar',
      icon: 'pi pi-plus',
      items: [
        {
          label: 'Produtos',
          icon: 'pi pi-folder',
          command: () => {
            this.router.navigate(['cadastrar/produto']);
          },
        },
        {
          label: 'Fornecedores',
          icon: 'pi pi-user',
          command: () => {
            this.router.navigate(['cadastrar/fornecedor']);
          },
        },
        {
          label: 'Categorias',
          icon: 'pi pi-list',
          command: () => {
            this.router.navigate(['cadastrar/categoria']);
          },
        },
      ],
    },
    {
      label: 'Movimentação',
      items: [
        {
          label: 'Adicionar Produto',
          icon: 'pi pi-plus',
          command: () => {
            this.router.navigate(['adicionar/produto']);
          },
        },
        {
          label: 'Retirar Produto',
          icon: 'pi pi-minus',
          command: () => {
            this.router.navigate(['retirar/produto']);
          },
        },
        {
          label: 'Histórico',
          icon: 'pi pi-clock',
          command: () => {
            this.router.navigate(['historico']);
          },
        },
      ],
    },
    {
      label: 'Listar',
      items: [
        {
          label: 'Fornecedores',
          command: () => {
            this.router.navigate(['listar/fornecedor']);
          },
        },
        {
          label: 'Categorias',
          command: () => {
            this.router.navigate(['listar/categoria']);
          },
        },
      ],
    },
    {
      label: 'Estoque',
      icon: 'pi pi-bolt',
      command: () => {
        this.router.navigate(['estoque']);
      },
    },
  ];

  salvar() {
    if (this.form.valid) {
    this.toastService.notify(
      'Confirmaçao',
      'Movimentaçao salva',
      'pi pi-check'
    );
    this.router.navigate(['estoque']);
  }else {
    Object.values(this.form.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
}
