import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuario.component.html',
  styleUrls: []
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) {
    this.usuarios = [] as Usuario[]
  }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios() {
    this.usuarioService.listar().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

  excluirUsuario(usuario: Usuario) {
    if (confirm('Tem certeza que deseja excluir o usuário ' + usuario.nome + '?')) {
      this.usuarioService.remover(usuario.id!).subscribe(() => {
        this.usuarios = this.usuarios.filter(u => u !== usuario);
      });
    }
  }
}
