import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ToastService } from '../../core/services/toast.service';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-estoque',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    DropdownModule,
  ],
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.scss',
})
export class EstoqueComponent {
  router = inject(Router);
  toastService = inject(ToastService);

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

  salvar() {
    //if formulario valido
    this.toastService.notify(
      'Confirmaçao',
      'Produto salvo com sucesso',
      'pi pi-check'
    );
    this.router.navigate(['estoque']);
  }
}
