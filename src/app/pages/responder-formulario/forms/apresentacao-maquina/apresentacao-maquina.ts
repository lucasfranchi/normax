import { ChangeExcelFile } from "src/app/services/change-excel-file/change-excel-file"
import { ApresentacaoMaquinaForm } from "src/app/services/form-organizer/form-organizer";

export function getApresentacaoCellChangesByForm(form: ApresentacaoMaquinaForm, key: string, reportId: number): ChangeExcelFile {
  switch (key) {
    case 'maquina':
      return {
        cell: ['A5'],
        value: form[key],
        worksheetIndex: reportId
      }
    case 'relMaquina':
      return {
        cell: ['A11'],
        value: form[key],
        worksheetIndex: reportId
      }
    case 'numTagSeri':
      return {
        cell: ['C11'],
        value: form[key],
        worksheetIndex: reportId
      }
    case 'localInstalacao':
      return {
        cell: ['E11'],
        value: form[key],
        worksheetIndex: reportId
      }
    case 'anoFabricacao':
      return {
        cell: ['K11'],
        value: form[key],
        worksheetIndex: reportId
      }
    case 'tipo':
      return {
        cell: ['L11'],
        value: form[key],
        worksheetIndex: reportId
      }
    case 'dataInspecao':
      return {
        cell: ['N11'],
        value: form[key],
        worksheetIndex: reportId
      }
    case 'feEletrica':
      return {
        cell: ['A16'],
        value: form[key],
        worksheetIndex: reportId
      }
    case 'fePneumatica':
      return {
        cell: ['D16'],
        value: form[key],
        worksheetIndex: reportId
      }
    case 'feHidraulica':
      return {
        cell: ['G16'],
        value: form[key],
        worksheetIndex: reportId
      }
    case 'feOutra':
      return {
        cell: ['J16'],
        value: form[key],
        worksheetIndex: reportId
      }
    case 'ssProtecoesFixa':
      return {
        cell: ['A19'],
        value: form[key],
        worksheetIndex: reportId
      }
    case 'ssProtecoesMoveis':
      return {
        cell: ['A20'],
        value: form[key],
        worksheetIndex: reportId
      }
    case 'ssDispositivo':
      return {
        cell: ['A21'],
        value: form[key],
        worksheetIndex: reportId
      }
    case 'ssComando':
      return {
        cell: ['A22'],
        value: form[key],
        worksheetIndex: reportId
      }
    case 'ssScanner':
      return {
        cell: ['A23'],
        value: form[key],
        worksheetIndex: reportId
      }
    case 'ssCortina':
      return {
        cell: ['G19'],
        value: form[key],
        worksheetIndex: reportId
      }
    case 'ssProtecao':
      return {
        cell: ['G20'],
        value: form[key],
        worksheetIndex: reportId
      }
    case 'ssBloco':
      return {
        cell: ['G21'],
        value: form[key],
        worksheetIndex: reportId
      }
    case 'ssSensores':
      return {
        cell: ['G22'],
        value: form[key],
        worksheetIndex: reportId
      }
    case 'ssCalco':
      return {
        cell: ['G23'],
        value: form[key],
        worksheetIndex: reportId
      }
    case 'ssRele':
      return {
        cell: ['L19'],
        value: form[key],
        worksheetIndex: reportId
      }
    case 'ssChave':
      return {
        cell: ['L20'],
        value: form[key],
        worksheetIndex: reportId
      }
    case 'ssRearme':
      return {
        cell: ['L21'],
        value: form[key],
        worksheetIndex: reportId
      }
    case 'ssSinal':
      return {
        cell: ['L22'],
        value: form[key],
        worksheetIndex: reportId
      }
    case 'ssOutros':
      return {
        cell: ['L23'],
        value: form[key],
        worksheetIndex: reportId
      }
    case 'respTecnico':
      return {
        cell: ['A27'],
        value: form[key],
        worksheetIndex: reportId
      }
    case 'crea':
      return {
        cell: ['E27'],
        value: form[key],
        worksheetIndex: reportId
      }
    case 'qualificacao':
      return {
        cell: ['I27'],
        value: form[key],
        worksheetIndex: reportId
      }
  }

  return null;
}
