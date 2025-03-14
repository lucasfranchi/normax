import { ChangeExcelFile } from 'src/app/services/change-excel-file/change-excel-file';
import { LimitesMaquinaForm } from 'src/app/services/form-organizer/form-organizer';

export function getLimitesCellChangesByForm(
  form: LimitesMaquinaForm,
  key: string,
  reportId: number
): ChangeExcelFile {
  switch (key) {
    case 'ambiente':
      return {
        cell: ['G7'],
        value: form[key],
        worksheetIndex: reportId,
      };
    case 'treinamentoOp':
      return {
        cell: ['G8'],
        value: form[key],
        worksheetIndex: reportId,
      };
    case 'operador':
      return {
        cell: ['G9'],
        value: form[key],
        worksheetIndex: reportId,
      };
    case 'manutencao':
      return {
        cell: ['G10'],
        value: form[key],
        worksheetIndex: reportId,
      };
    case 'vidaUtil':
      return {
        cell: ['G11'],
        value: form[key],
        worksheetIndex: reportId,
      };
    case 'avaliacaoErgonomica':
      return {
        cell: ['K17'],
        value: form[key],
        worksheetIndex: reportId,
      };
    case 'manuelMaquina':
      return {
        cell: ['K18'],
        value: form[key],
        worksheetIndex: reportId,
      };
    case 'certificadosCapacitacao':
      return {
        cell: ['K19'],
        value: form[key],
        worksheetIndex: reportId,
      };
    case 'groPgr':
      return {
        cell: ['K20'],
        value: form[key],
        worksheetIndex: reportId,
      };
    case 'procOperacionais':
      return {
        cell: ['K21'],
        value: form[key],
        worksheetIndex: reportId,
      };
    case 'loto':
      return {
        cell: ['K22'],
        value: form[key],
        worksheetIndex: reportId,
      };
  }

  return null;
}
