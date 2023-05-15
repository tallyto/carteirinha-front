export interface Carteirinha {
  id: number;
  numero: string;
  dataEmissao: string;
  dataValidade: string;
  usuario: {
    id: string;
  }
}
