import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CadastroProdutoComponent } from './components/cadastro-produto/cadastro-produto/cadastro-produto.component';
import { CadastroFornecedorComponent } from './components/cadastro-fornecedor/cadastro-fornecedor/cadastro-fornecedor.component';
import { CadastroCategoriaComponent } from './components/cadastro-categoria/cadastro-categoria.component';
import { AdicionarProdutoComponent } from './components/adicionar-produto/adicionar-produto.component';
import { RetirarProdutoComponent } from './components/retirar-produto/retirar-produto.component';
import { HistoricoMovimentacaoComponent } from './components/historico-movimentacao/historico-movimentacao.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastrar/produto', component: CadastroProdutoComponent },
  { path: 'cadastrar/fornecedor', component: CadastroFornecedorComponent },
  { path: 'cadastrar/categoria', component: CadastroCategoriaComponent },
  { path: 'adicionar/produto', component: AdicionarProdutoComponent },
  { path: 'retirar/produto', component: RetirarProdutoComponent },
  { path: 'historico', component: HistoricoMovimentacaoComponent },
  { path: 'estoque', component: CadastroProdutoComponent },
  { path: 'perfil', component: CadastroProdutoComponent },
];
