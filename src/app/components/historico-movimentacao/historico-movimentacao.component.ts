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
@Component({
  selector: 'app-historico-movimentacao',
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
  ],
  templateUrl: './historico-movimentacao.component.html',
  styleUrl: './historico-movimentacao.component.scss',
})
export class HistoricoMovimentacaoComponent {
  router = inject(Router);
  toastService = inject(ToastService);

  products = [
    {
      EAN: '7891234567891',
      Produto: 'Arroz',
      CNPJ: '12.345.678/0001-99',
      Quantidade: 100,
      Data: '2024-06-01',
    },
    {
      EAN: '7891234567892',
      Produto: 'Feijão',
      CNPJ: '12.345.678/0002-88',
      Quantidade: 50,
      Data: '2024-06-02',
    },
    {
      EAN: '7891234567893',
      Produto: 'Macarrão',
      CNPJ: '12.345.678/0003-77',
      Quantidade: 200,
      Data: '2024-06-03',
    },
    {
      EAN: '7891234567894',
      Produto: 'Óleo de Soja',
      CNPJ: '12.345.678/0004-66',
      Quantidade: 75,
      Data: '2024-06-04',
    },
    {
      EAN: '7891234567895',
      Produto: 'Açúcar',
      CNPJ: '12.345.678/0005-55',
      Quantidade: 150,
      Data: '2024-06-05',
    },
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
            this.router.navigate(['listar/categoriia']);
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
    //if formulario valido
    this.toastService.notify(
      'Confirmaçao',
      'Movimentaçao salva',
      'pi pi-check'
    );
    this.router.navigate(['estoque']);
  }
}
