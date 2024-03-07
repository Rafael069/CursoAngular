import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListagemUsuariosComponent } from './pages/usuarios/listagem/listagem.component';
import { ListagemProdutosComponent } from './pages/produtos/listagem/listagem.component';
import { CadastroEdicaoProdutosComponent } from './pages/produtos/cadastro-edicao/cadastro-edicao-produtos.component';
import { CadastroEdicaoUsuariosComponent } from './pages/usuarios/cadastro-edicao/cadastro-edicao-usuarios.component';
import { UsuarioGuard } from './guards/usuario.guard';

// import { Routes } from '@angular/router';*
// import { HomeComponent } from './pages/home/home.component';*
// import { ListagemUsuariosComponent } from './pages/usuarios/listagem-usuarios/listagem-usuarios.component';*
// import { ListagemProdutosComponent } from './pages/produtos/listagem-produtos/listagem-produtos.component';*
// import { CadastroUsuariosComponent } from './pages/usuarios/cadastro-usuarios/cadastro-usuarios.component';*
// import { CadastroProdutosComponent } from './pages/produtos/cadastro-produtos/cadastro-produtos.component';
// import { UsuarioGuard } from './guards/usuario.guard';
 
export const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'usuarios', component: ListagemUsuariosComponent},
  {path:'produtos', component: ListagemProdutosComponent},

{ path:'', component: HomeComponent },
{ path:'usuarios/cadastrar',component: CadastroEdicaoUsuariosComponent,canActivate: [UsuarioGuard] },
{ path:'usuarios/editar/:id', component: CadastroEdicaoUsuariosComponent,canActivate: [UsuarioGuard] },
// { path:'usuarios/cadastrar',component: CadastroUsuariosComponent,canActivate: [UsuarioGuard] },
// { path:'usuarios/editar/:id', component: CadastroUsuariosComponent,canActivate: [UsuarioGuard] },
{ path:'usuarios',component: ListagemUsuariosComponent },
// { path:'produtos/cadastrar', component: CadastroProdutosComponent },
// { path:'produtos/editar/:id', component: CadastroProdutosComponent },
{ path:'produtos/cadastrar', component: CadastroEdicaoProdutosComponent },
{ path:'produtos/editar/:id', component: CadastroEdicaoProdutosComponent },
{ path:'produtos', component: ListagemProdutosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

