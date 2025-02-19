import { ApreciacaoRiscoPresets } from '../apreciacao-risco';

export function getPresetReport15(reportId: string): ApreciacaoRiscoPresets[] {
  return [
    {
      id: '1',
      reportId: reportId,
      form: {
        perigo: 'Requisitos específicos - Item conforme',
        localizacao: 'Em toda máquina',
        atividade: 'Operação, manutenção',
        consequenciaRisco: 'Cortes, arranhões',
        tipo: 'Mecânico',
        arpo: '0,5',
        arfe: '2,5',
        arglp: '4',
        arnp: '1',
        erpo: '0,5',
        consideracaoCondAtual:
          'Não evidenciados problemas com os Requisitos Específicos de Segurança que possam gerar risco direto de acidente aos operadores da máquina, atendendo os requisitos estabelecidos pelo item 12.17 da NR-12.',
        recomendacoes:
          'Manter as ferramentas em bom estado de conservação e orientar os funcionários para evitar porte de ferramentas em bolsos.',
        relatorio: reportId,
      },
    },
    {
      id: '2',
      reportId: reportId,
      form: {
        perigo:
          'Porte de ferramentas manuais em bolsos ou locais não apropriados',
        localizacao: 'Em toda máquina',
        atividade: 'Operação, manutenção',
        consequenciaRisco: 'Cortes, arranhões',
        tipo: 'Mecânico',
        arpo: '8',
        arfe: '4',
        arglp: '2',
        arnp: '1',
        erpo: '0,5',
        consideracaoCondAtual:
          'Evidenciado que trabalhadores portam ferramentas manuais em bolsos ou locais não apropriados, não atende o item  12.17.2 da NR-12.',
        recomendacoes:
          'Providenciar para que os trabalhadores não portem ferramentas manuais em bolsos.',
        relatorio: reportId,
      },
    },
  ];
}
