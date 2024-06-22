import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CadastroProdutoComponent } from './components/cadastro-produto/cadastro-produto/cadastro-produto.component';
import { CadastroFornecedorComponent } from './components/cadastro-fornecedor/cadastro-fornecedor/cadastro-fornecedor.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastrar/produto', component: CadastroProdutoComponent },
  { path: 'cadastrar/fornecedor', component: CadastroFornecedorComponent },
  { path: 'cadastrar/categoria', component: CadastroProdutoComponent },
  { path: 'adicionar/produto', component: CadastroProdutoComponent },
  { path: 'retirar/produto', component: CadastroProdutoComponent },
  { path: 'estoque', component: CadastroProdutoComponent },
  { path: 'perfil', component: CadastroProdutoComponent },
];
