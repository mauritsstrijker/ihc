import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ToastService } from '../../core/services/toast.service';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorModule } from 'primeng/paginator';

interface Product {
  name: string;
  quantity: number;
}

@Component({
  selector: 'app-estoque',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    DropdownModule,
    PaginatorModule,
  ],
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss'],
})
export class EstoqueComponent implements OnInit {
  router = inject(Router);
  toastService = inject(ToastService);

  products: Product[] = [
    { name: 'Molho de Tomate Qero', quantity: 120 },
    { name: 'Nesquick Morango', quantity: 70 },
    { name: 'Dr Músculo Desinfetante', quantity: 60 },
    { name: 'Coca Cola 2L', quantity: 45 },
    { name: 'Inseticida SBP', quantity: 30 },
    { name: 'Água Mineral Cristal', quantity: 200 },
    { name: 'Papel Higiênico Neve', quantity: 70 },
    { name: 'Danone Vigor Morango', quantity: 35 },
    { name: 'Arroz Branco', quantity: 150 },
    { name: 'Feijão Preto', quantity: 100 },
    { name: 'Óleo de Soja', quantity: 80 },
    { name: 'Sal Refinado', quantity: 50 },
    { name: 'Açúcar Cristal', quantity: 90 },
    { name: 'Macarrão Espaguete', quantity: 70 },
    { name: 'Farinha de Trigo', quantity: 60 },
    { name: 'Leite Condensado', quantity: 40 },
    { name: 'Creme de Leite', quantity: 30 },
    { name: 'Café em Pó', quantity: 120 },
    { name: 'Margarina', quantity: 50 },
    { name: 'Achocolatado em Pó', quantity: 75 },
    { name: 'Vinagre', quantity: 45 },
    { name: 'Molho de Soja', quantity: 25 },
    { name: 'Mostarda', quantity: 35 },
    { name: 'Ketchup', quantity: 55 },
    { name: 'Maionese', quantity: 40 },
    { name: 'Pimenta do Reino', quantity: 20 },
    { name: 'Orégano', quantity: 30 },
    { name: 'Azeite de Oliva', quantity: 60 },
    { name: 'Leite Integral', quantity: 100 },
    { name: 'Iogurte Natural', quantity: 50 },
    { name: 'Requeijão', quantity: 40 },
    { name: 'Queijo Mussarela', quantity: 70 },
    { name: 'Presunto', quantity: 50 },
    { name: 'Peito de Frango', quantity: 80 },
    { name: 'Carne Bovina', quantity: 90 },
    { name: 'Linguiça', quantity: 60 },
    { name: 'Bacon', quantity: 40 },
    { name: 'Peixe Congelado', quantity: 50 },
    { name: 'Camarão', quantity: 30 },
    { name: 'Alface', quantity: 100 },
    { name: 'Tomate', quantity: 80 },
    { name: 'Cebola', quantity: 70 },
    { name: 'Alho', quantity: 50 },
    { name: 'Batata', quantity: 90 },
    { name: 'Cenoura', quantity: 60 },
    { name: 'Pimentão', quantity: 40 },
    { name: 'Brócolis', quantity: 30 },
    { name: 'Abobrinha', quantity: 20 },
    { name: 'Couve-flor', quantity: 25 },
    { name: 'Espinafre', quantity: 35 },
  ];

  paginatedProducts: Product[] = [];
  rows = 8;
  totalRecords = this.products.length;
  currentPage = 0;

  ngOnInit() {
    this.paginate();
  }

  paginate() {
    const start = this.currentPage * this.rows;
    const end = start + this.rows;
    this.paginatedProducts = this.products.slice(start, end);
  }

  onPageChange(event: any) {
    this.currentPage = event.page;
    this.paginate();
  }

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
          command: () => {
            this.router.navigate(['login']);
          },
        },
      ],
    },
  ];

  salvar() {
    //if formulario valido
    this.toastService.notify(
      'Confirmação',
      'Produto salvo com sucesso',
      'pi pi-check'
    );
    this.router.navigate(['estoque']);
  }
}
