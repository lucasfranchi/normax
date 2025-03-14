import { getApresentacaoCellChangesByForm, getCapaCellChangesByForm } from 'src/app/pages/formularios/nr-12/apresentacao-maquina/apresentacao-maquina';
import { ChangeExcelFile } from '../change-excel-file/change-excel-file';
import { getCategoriaCellChangesByForm } from 'src/app/pages/formularios/nr-12/categoria-seguranca/categoria-seguranca';
import { getLimitesCellChangesByForm } from 'src/app/pages/formularios/nr-12/limites-maquina/limites-maquina';

export interface FormOrganizerInterface {
  apresentacaoMaquina?: ApresentacaoMaquinaForm;
  categoriaSeguranca?: CategoriaForm;
  limitesMaquina?: LimitesMaquinaForm;
  capa?: CapaForm;
}

export interface ApresentacaoMaquinaForm {
  maquina: string;
  relMaquina: string;
  numTagSeri: string;
  localInstalacao: string;
  anoFabricacao: string;
  tipo: string;
  dataInspecao: string;
  feEletrica: string;
  fePneumatica: string;
  feHidraulica: string;
  feOutra: string;
  ssProtecoesFixa: string;
  ssProtecoesMoveis: string;
  ssDispositivo: string;
  ssComando: string;
  ssScanner: string;
  ssCortina: string;
  ssProtecao: string;
  ssBloco: string;
  ssSensores: string;
  ssCalco: string;
  ssRele: string;
  ssChave: string;
  ssRearme: string;
  ssSinal: string;
  ssOutros: string;
  procedimentoLoto: string;
  respTecnico: string;
  crea: string;
  qualificacao: string;
}

export interface CategoriaForm {
  categoriaS: 'S1' | 'S2';
  categoriaF: 'F1' | 'F2';
  categoriaP: 'P1' | 'P2';
}

export interface CapaForm {
  maquina: string;
  serie: string;
  localInstalacao: string;
  valorMedia: string;
}

export interface LimitesMaquinaForm {
  ambiente: string;
  treinamentoOp: string;
  operador: string;
  manutencao: string;
  vidaUtil: string;
  avaliacaoErgonomica: string;
  manuelMaquina: string;
  certificadosCapacitacao: string;
  groPgr: string;
  procOperacionais: string;
  loto: string;
}

export function getLinkedForms(
  key: string,
  form: FormOrganizerInterface
): Array<ChangeExcelFile> {
  switch (key) {
    case 'capa':
      return Object.keys(form.capa).map((it) =>
        getCapaCellChangesByForm(form.capa, it, 17)
      );
    case 'apresentacaoMaquina':
      return Object.keys(form.apresentacaoMaquina).map((it) =>
        getApresentacaoCellChangesByForm(form.apresentacaoMaquina, it, 18)
      );
    case 'categoriaSeguranca':
      return Object.keys(form.categoriaSeguranca).map((it) =>
        getCategoriaCellChangesByForm(form.categoriaSeguranca, it, 19)
      );
    case 'limitesMaquina':
      return Object.keys(form.limitesMaquina).map((it) =>
        getLimitesCellChangesByForm(form.limitesMaquina, it, 20)
      );
  }

  return null;
}

export function getReportIdsForms(key: string): string {
  switch (key) {
    case 'capa':
      return '17';
    case 'apresentacaoMaquina':
      return '18';
    case 'categoriaSeguranca':
      return '19';
    case 'limitesMaquina':
      return '20';
  }

  return null;
}
