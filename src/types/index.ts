export interface Perfil {
  nome: string,
  ocupacao: string,
  resumo: string,
  perfilProfissional: string

}

export interface Contato {
  id: number,
  tipo: string,
  contato: string

}

export interface Educacao {
  id: number,
  instituicao: string,
  curso: string

}

export interface Experiencia {
  cargo: string,
  periodo: string,
  empresa: string,
  local: string,
  conteudo:string,
  id: number
}

export interface DadosDoUsuario {
  nome: string,
  ocupacao: string,
  resumo: string,
  perfilProfissional: string,
  contatos: Contato[],
  educacao: Educacao[],
  experiencia: Experiencia[]
}