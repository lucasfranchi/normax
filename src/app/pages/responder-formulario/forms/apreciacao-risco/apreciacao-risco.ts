import {ChangeExcelFile, ChangeExcelFileDTO} from "../../../../services/change-excel-file/change-excel-file";

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

export function getCellChangesByForm(form: any, key: string, reportId: number): ChangeExcelFile {
  switch (key) {
    case 'perigo':
      return {
        cell: 'C2',
        value: form[key],
        worksheetIndex: reportId
      }
    case 'localizacao':
      return {
        cell: 'C4',
        value: form[key],
        worksheetIndex: reportId
      }
    case 'atividade':
      return {
        cell: 'I2',
        value: form[key],
        worksheetIndex: reportId
      }
    case 'consequenciaRisco':
      return {
        cell: 'I3',
        value: form[key],
        worksheetIndex: reportId
      }
    case 'tipo':
      return {
        cell: 'I4',
        value: form[key],
        worksheetIndex: reportId
      }
    case 'arpo':
      return {
        cell: 'A8',
        value: form[key],
        worksheetIndex: reportId
      }
    case 'arfe':
      return {
        cell: 'C8',
        value: form[key],
        worksheetIndex: reportId
      }
    case 'arglp':
      return {
        cell: 'D8',
        value: form[key],
        worksheetIndex: reportId
      }
    case 'arnp':
      return {
        cell: 'E8',
        value: form[key],
        worksheetIndex: reportId
      }
    case 'erpo':
      return {
        cell: 'G8',
        value: form[key],
        worksheetIndex: reportId
      }
    case 'consideracaoCondAtual':
      return {
        cell: 'A11',
        value: form[key],
        worksheetIndex: reportId
      }
    case 'recomendacoes':
      return {
        cell: 'G11',
        value: form[key],
        worksheetIndex: reportId
      }
  }

  return null;
}
