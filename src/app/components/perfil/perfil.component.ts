import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ToastService } from '../../core/services/toast.service';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    DropdownModule,
    ConfirmDialogModule,
    ReactiveFormsModule
  ],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss',
})
export class PerfilComponent implements OnInit{
  router = inject(Router);
  toastService = inject(ToastService);
  form!: FormGroup;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      senhaAtual: ['', Validators.required],
      senhaNova: ['', Validators.required],
      senhaNova2: ['', Validators.required],
    });
  }
  ngOnInit(): void {}

  confirm2(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Voce realmente deseja excluir sua conta?',
      header: 'Confirmação',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Ação confirmada',
          detail: 'Conta deletada',
        });
        this.router.navigate(['/login']);
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Ação cancelada',
          detail: 'Sua conta não foi deletada',
        });
      },
    });
  }

  products = [
    { name: 'Molho de Tomate Qero', quantity: 120 },
    { name: 'Nesquick Morangi', quantity: 70 },
    { name: 'Dr Músculo Desinfetante', quantity: 60 },
    { name: 'Coca Cola 2L', quantity: 45 },
    { name: 'Inseticida SBP', quantity: 30 },
    { name: 'Água Mineral Cristal', quantity: 200 },
    { name: 'Papel Higiênico Neve', quantity: 70 },
    { name: 'Danone Vigor Morango', quantity: 35 },
  ];

  filterOptions = [
    { label: 'Categoria', value: 'categoria' },
    { label: 'Fornecedor', value: 'fornecedor' },
    { label: 'Quantidade', value: 'quantidade' },
    { label: 'Ordem Alfabética', value: 'alfabetica' },
  ];

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
          // styleClass: 'custom-logout-icon',
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
        'Perfil salvo com sucesso',
        'pi pi-check'
      );
      this.router.navigate(['estoque']);
    } else {
      Object.values(this.form.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
}
