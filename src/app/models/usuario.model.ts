import { Escolaridade } from "./escolaridade.model";
import { Genero } from "./genero.model";

export interface Usuario {
  id?: number;
  nome: string;
  dataNascimento: string;
  genero: Genero
  escolaridade: Escolaridade;
  cpf: string;
  celular: string;
  instituicao: string;
  curso: string;
  email: string;
}

