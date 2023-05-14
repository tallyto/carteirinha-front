import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'http://localhost:3001/usuarios';

  constructor(private http: HttpClient) { }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, usuario);
  }

  listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }

  remover(id: number): Observable<unknown> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url);
  }

  atualizar(id: number, usuario: Usuario): Observable<Usuario> {
    const url = `${this.url}/${id}`;
    return this.http.put<Usuario>(url, usuario);
  }

}
