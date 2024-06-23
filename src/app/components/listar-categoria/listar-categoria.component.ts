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
  selector: 'app-listar-categoria',
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
  templateUrl: './listar-categoria.component.html',
  styleUrl: './listar-categoria.component.scss',
})
export class ListarCategoriaComponent {
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  router = inject(Router);
  toastService = inject(ToastService);

  confirm2(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Voce deseja deletar esta categoria?',
      header: 'Confirmaçao',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'bg-green-600 p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        this.toastService.notify(
          'Confirmaçao',
          'Categoria deletada com sucesso.'
        );
      },
    });
  }

  categorias = [
    {
      nome: 'Tecnologia',
      descricao: 'Tudo sobre tecnologia, gadgets e inovações.',
    },
    {
      nome: 'Saúde',
      descricao: 'Dicas e informações sobre saúde e bem-estar.',
    },
    {
      nome: 'Educação',
      descricao: 'Recursos e notícias sobre educação e aprendizado.',
    },
    {
      nome: 'Esportes',
      descricao: 'Últimas notícias e atualizações sobre o mundo dos esportes.',
    },
    {
      nome: 'Entretenimento',
      descricao: 'Novidades sobre filmes, séries, música e cultura pop.',
    },
    {
      nome: 'Negócios',
      descricao: 'Informações sobre economia, empresas e finanças.',
    },
    {
      nome: 'Viagem',
      descricao: 'Dicas de viagem, destinos e experiências ao redor do mundo.',
    },
    {
      nome: 'Culinária',
      descricao: 'Receitas, dicas e novidades do mundo gastronômico.',
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
