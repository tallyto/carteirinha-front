import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Usuario} from 'src/app/models/usuario.model';
import {UsuarioService} from 'src/app/services/usuario.service';
import {Escolaridade} from "../../models/escolaridade.model";
import {EscolaridadeService} from "../../services/escolaridade.service";
import {Genero} from "../../models/genero.model";
import {GeneroService} from "../../services/genero.service";
import {Message, MessageService} from "primeng/api";

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: []
})
export class CadastroUsuarioComponent implements OnInit {

  formCadastro: FormGroup;
  usuarios: Usuario[];
  usuarioSelecionado: Usuario;
  generos: Genero[] = [] as any;
  escolaridades: Escolaridade[] = [] as any;
  msgs: Message[] = [];

  minDate: Date;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private escolaridadeService: EscolaridadeService,
    private generoService: GeneroService,
    private messageService: MessageService
  ) {
    this.formCadastro = {} as FormGroup;
    this.usuarioSelecionado = {} as Usuario;
    this.usuarios = [] as Usuario[];
    this.minDate = new Date('1900-01-01');
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
    this.buscaEscolaridades()
    this.buscaGeneros()
  }

  buscaEscolaridades(): void {
    this.escolaridadeService.getAll().subscribe(
      {
        next: (escolaridade) => {
          this.escolaridades = escolaridade;
        }
      }
    )

  }

  buscaGeneros(): void {
    this.generoService.getAll().subscribe(
      {
        next: (genero) => {
          this.generos = genero;
        }
      }
    )

  }


  criarUsuario(): void {
    const usuario = this.formCadastro.value as Usuario;
    this.usuarioService.cadastrar(usuario).subscribe(
      {
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Usuário cadastrado com sucesso!',
            life: 3000
          });
          this.formCadastro.reset();
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro ao cadastrar usuário',
            life: 3000
          });
          console.log(error)
        }
      }
    );
  }

  atualizarUsuario(): void {
    const usuario = this.formCadastro.value as Usuario;
    this.usuarioService.atualizar(usuario.id!, usuario).subscribe(
      () => {
        this.formCadastro.reset();
        this.usuarioSelecionado = {} as Usuario;
      },
      error => console.log(error)
    );
  }

  removerUsuario(usuario: Usuario): void {
    this.usuarioService.remover(usuario.id!).subscribe(
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
