import { ChangeExcelFile } from "src/app/services/change-excel-file/change-excel-file";

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

export function getCellChangesByForm(form: any, key: string) {
  switch (key) {
    case 'perigo':
      return {
        cell: 'C2',
        value: form[key],
        worksheetIndex: form['relatorio']
      }
    case 'localizacao':
      return {
        cell: 'C4',
        value: form[key],
        worksheetIndex: form['relatorio']
      }
    case 'atividade':
      return {
        cell: 'I2',
        value: form[key],
        worksheetIndex: form['relatorio']
      }
    case 'consequenciaRisco':
      return {
        cell: 'I3',
        value: form[key],
        worksheetIndex: form['relatorio']
      }
    case 'tipo':
      return {
        cell: 'I4',
        value: form[key],
        worksheetIndex: form['relatorio']
      }
    case 'consideracaoCondAtual':
      return {
        cell: 'A11',
        value: form[key],
        worksheetIndex: form['relatorio']
      }
    case 'recomendacoes':
      return {
        cell: 'G11',
        value: form[key],
        worksheetIndex: form['relatorio']
      }
  }

  return null;
}
