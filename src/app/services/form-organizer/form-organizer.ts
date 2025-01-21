export interface FormOrganizerInterface {
  apresentacaoMaquina?: ApresentacaoMaquinaForm;
  categoriaSeguranca?: CategoriaForm;
  limitesMaquina?: LimitesMaquinaForm;
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
  respTecnico: string;
  crea: string;
  qualificacao: string;
}

export interface CategoriaForm {
  categoriaS: 'S1' | 'S2';
  categoriaF: 'F1' | 'F2';
  categoriaP: 'P1' | 'P2';
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
