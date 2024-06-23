import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ToastService } from '../../core/services/toast.service';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { CalendarModule } from 'primeng/calendar';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
@Component({
  selector: 'app-listar-fornecedor',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    InputMaskModule,
    TableModule,
    IconFieldModule,
    InputIconModule,
    CalendarModule,
    DatePipe,
    CommonModule,
    ConfirmDialogModule,
    ButtonModule,
  ],
  templateUrl: './listar-fornecedor.component.html',
  styleUrl: './listar-fornecedor.component.scss',
})
export class ListarFornecedorComponent {
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  router = inject(Router);
  toastService = inject(ToastService);

  confirm2(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Voce deseja deletar este fornecedor?',
      header: 'Confirmaçao',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'bg-green-600 p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        this.toastService.notify(
          'Confirmaçao',
          'Fornecedor deletado com sucesso.'
        );
      },
    });
  }

  fornecedores = [
    {
      nome: 'Empresa A',
      razao: 'Empresa A Ltda',
      cnpj: '00.000.000/0001-00',
      telefone: '(11) 1111-1111',
    },
    {
      nome: 'Empresa B',
      razao: 'Empresa B Ltda',
      cnpj: '00.000.000/0002-00',
      telefone: '(11) 2222-2222',
    },
    {
      nome: 'Empresa C',
      razao: 'Empresa C Ltda',
      cnpj: '00.000.000/0003-00',
      telefone: '(11) 3333-3333',
    },
    {
      nome: 'Empresa D',
      razao: 'Empresa D Ltda',
      cnpj: '00.000.000/0004-00',
      telefone: '(11) 4444-4444',
    },
    {
      nome: 'Empresa E',
      razao: 'Empresa E Ltda',
      cnpj: '00.000.000/0005-00',
      telefone: '(11) 5555-5555',
    },
    {
      nome: 'Empresa F',
      razao: 'Empresa F Ltda',
      cnpj: '00.000.000/0006-00',
      telefone: '(11) 6666-6666',
    },
    {
      nome: 'Empresa G',
      razao: 'Empresa G Ltda',
      cnpj: '00.000.000/0007-00',
      telefone: '(11) 7777-7777',
    },
    {
      nome: 'Empresa H',
      razao: 'Empresa H Ltda',
      cnpj: '00.000.000/0008-00',
      telefone: '(11) 8888-8888',
    },
    {
      nome: 'Empresa I',
      razao: 'Empresa I Ltda',
      cnpj: '00.000.000/0009-00',
      telefone: '(11) 9999-9999',
    },
    {
      nome: 'Empresa J',
      razao: 'Empresa J Ltda',
      cnpj: '00.000.000/0010-00',
      telefone: '(11) 1010-1010',
    },
  ];

  excluir() {
    this.toastService.notify('Confirmaçao', 'Fornecedor deletado com sucesso!');
  }

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
      label: 'Movimentacao',
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

  // salvar() {
  //   //if formulario valido
  //   this.toastService.notify(
  //     'Confirmaçao',
  //     'Movimentaçao salva',
  //     'pi pi-check'
  //   );
  //   this.router.navigate(['estoque']);
  // }
}
