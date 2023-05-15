import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaUsuariosComponent } from './components/lista-usuario/lista-usuario.component';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'
import { CalendarModule } from 'primeng/calendar'
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import {NotFoundComponent} from "./components/not-found/not-found.component";
import { CarteirinhaListaComponent } from './components/carteirinha-lista/carteirinha-lista.component';
import {CardModule} from "primeng/card";

@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    ListaUsuariosComponent,
    NavbarComponent,
    NotFoundComponent,
    CarteirinhaListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    PanelModule,
    BrowserAnimationsModule,
    MenubarModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
