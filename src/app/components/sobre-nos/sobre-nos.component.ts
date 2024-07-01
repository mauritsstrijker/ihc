import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../../core/services/toast.service';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-sobre-nos',
  standalone: true,
  imports: [
    MenubarModule,
    CardModule
  ],
  templateUrl: './sobre-nos.component.html',
  styleUrl: './sobre-nos.component.scss'
})
export class SobreNosComponent {
  router = inject(Router);
  toastService = inject(ToastService);
  form!: FormGroup;

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
    {
      label: 'Usuário',
      icon: 'pi pi-user',
      items: [
        {
          label: 'Perfil',
          icon: 'pi pi-user-edit',
          command: () => {
            this.router.navigate(['perfil']);
          },
        },
        {
          label: 'Sair',
          icon: 'pi pi-sign-out',
          styleClass: 'bg-red-400',
          command: () => {
            this.router.navigate(['login']);
          },
        },
      ],
    },
  ];
  
  salvar() {
    if (this.form.valid) {
    this.toastService.notify(
      'Confirmação',
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
