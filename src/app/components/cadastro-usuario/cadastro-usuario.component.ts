import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: []
})
export class CadastroUsuarioComponent implements OnInit {

  formCadastro: FormGroup;
  usuarios: Usuario[];
  usuarioSelecionado: Usuario;
  generos = [
    { id: 1, nome: 'Feminino' },
    { id: 2, nome: 'Masculino' },
    { id: 3, nome: 'Outro' }
  ];
  escolaridades = [
    { id: 1, nome: 'Ensino fundamental incompleto' },
    { id: 2, nome: 'Ensino fundamental completo' },
    { id: 3, nome: 'Ensino médio incompleto' },
    { id: 4, nome: 'Ensino médio completo' },
    { id: 5, nome: 'Ensino superior incompleto' },
    { id: 6, nome: 'Ensino superior completo' }
  ];

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService) {
    this.formCadastro = {} as FormGroup;
    this.usuarioSelecionado = {} as Usuario;
    this.usuarios = [] as Usuario[];
  }

  ngOnInit(): void {
    this.formCadastro = this.formBuilder.group({
      nome: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      genero: ['', Validators.required],
      escolaridade: ['', Validators.required],
      cpf: ['', Validators.required],
      celular: ['', Validators.required],
      instituicao: ['', Validators.required],
      curso: ['', Validators.required],
      email: ['', Validators.required]
    });
    this.listarUsuarios();
  }

  listarUsuarios(): void {
    this.usuarioService.listar().subscribe(
      usuarios => this.usuarios = usuarios,
      error => console.log(error)
    );
  }

  criarUsuario(): void {
    const usuario = this.formCadastro.value as Usuario;
    this.usuarioService.cadastrar(usuario).subscribe(
      () => {
        this.formCadastro.reset();
        this.listarUsuarios();
      },
      error => console.log(error)
    );
  }

  atualizarUsuario(): void {
    const usuario = this.formCadastro.value as Usuario;
    this.usuarioService.atualizar(usuario.id!, usuario).subscribe(
      () => {
        this.formCadastro.reset();
        this.usuarioSelecionado = {} as Usuario;
        this.listarUsuarios();
      },
      error => console.log(error)
    );
  }

  removerUsuario(usuario: Usuario): void {
    this.usuarioService.remover(usuario.id!).subscribe(
      () => this.listarUsuarios(),
      error => console.log(error)
    );
  }

  selecionarUsuario(usuario: Usuario): void {
    this.usuarioSelecionado = usuario;
    this.formCadastro.patchValue(usuario);
  }

  cancelarEdicao(): void {
    this.usuarioSelecionado = {} as Usuario;
    this.formCadastro.reset();
  }

}
