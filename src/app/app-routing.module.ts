import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { ListaUsuariosComponent } from './components/lista-usuario/lista-usuario.component';
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {CarteirinhaListaComponent} from "./components/carteirinha-lista/carteirinha-lista.component";

const routes: Routes = [
  { path: '', redirectTo: '/lista-usuario', pathMatch: 'full' },
  { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
  { path: 'lista-usuario', component: ListaUsuariosComponent },
  {path: 'lista-carteirinha', component: CarteirinhaListaComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
