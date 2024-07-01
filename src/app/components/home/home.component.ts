import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { ThemeService } from '../../core/services/theme.service'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule, ButtonModule, MenubarModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  router = inject(Router);
  themeService = inject(ThemeService);

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

  // Função para trocar o tema
  onSwitchTheme() {
    this.themeService.switchTheme();
  }
}
