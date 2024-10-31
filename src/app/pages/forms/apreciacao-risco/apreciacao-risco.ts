export interface ApreciacaoRiscoForm {
  atividade: string;
  avaliacaoRisco: ApreciacaoRiscoHZN;
  consequenciaRisco: string;
  consideracaoCondAtual: string;
  estimativaRisco: ApreciacaoRiscoHZN;
  localizacao: string;
  perigo: string;
  recomendacoes: string;
  reducaoRiscoPerc: number;
  tipo: string;
  title: string;
}

export interface ApreciacaoRiscoHZN {
  po: number;
  fe: number;
  glp: number;
  np: number;
}
