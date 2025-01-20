import {ApreciacaoRiscoPresets} from "../apreciacao-risco";

export function getPresetReport16(reportId: string): ApreciacaoRiscoPresets[] {
  return [
    {
      id: '1',
      reportId: reportId,
      form: {
        perigo: 'Penalidades legais - Item conforme',
        localizacao: '-',
        atividade: 'Gestão, operacional',
        consequenciaRisco: 'Não conformidade em auditorias e fiscalizações',
        tipo: '-',
        arpo: '0,5',
        arfe: '4',
        arglp: '1',
        arnp: '1',
        erpo: '0,5',
        consideracaoCondAtual: 'Não evidenciados problemas com os requisitos do tópico de Disposições Finais que possam gerar risco direto de acidente aos operadores da máquina, atendendo os requisitos estabelecidos pelo item 12.18 da NR-12.',
        recomendacoes: 'Manter a documentação atualizada e a disposição das fiscalizações e auditorias.',
        relatorio: reportId,
      }
    }, {
      id: '2',
      reportId: reportId,
      form: {
        perigo: 'Penalidades legais - Item conforme',
        localizacao: '-',
        atividade: 'Gestão, operacional',
        consequenciaRisco: 'Não conformidade em auditorias e fiscalizações',
        tipo: '-',
        arpo: '0,5',
        arfe: '4',
        arglp: '1',
        arnp: '1',
        erpo: '0,5',
        consideracaoCondAtual: 'Não evidenciados problemas com os requisitos do tópico de Disposições Finais que possam gerar risco direto de acidente aos operadores da máquina. A relação de máquinas está sendo elaborada pela Prime Traffos conforme item 12.18.1 da NR-12.',
        recomendacoes: 'Manter a documentação atualizada e a disposição das fiscalizações e auditorias.',
        relatorio: reportId,
      }
    },
  ]
}
