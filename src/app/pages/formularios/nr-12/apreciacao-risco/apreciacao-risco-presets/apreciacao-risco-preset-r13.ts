import { ApreciacaoRiscoPresets } from '../apreciacao-risco';

export function getPresetReport13(reportId: string): ApreciacaoRiscoPresets[] {
  return [
    {
      id: '1',
      reportId: reportId,
      form: {
        perigo: 'Procedimentos de trabalho e segurança - Item conforme',
        localizacao: 'Toda máquina',
        atividade: 'Operação, manutenção, ajustes e limpeza',
        consequenciaRisco: 'Riscos gerais de acidentes',
        tipo: 'Mecânico, elétrico',
        arpo: '0,5',
        arfe: '2,5',
        arglp: '4',
        arnp: '1',
        erpo: '0,5',
        consideracaoCondAtual:
          'Evidenciado que a empresa possui procedimentos de trabalho e segurança e que eles estão disponíveis e sendo aplicados em campo, atendendo os requisitos estabelecidos pelo item 12.14 da NR-12.',
        recomendacoes:
          'Manter os procedimentos atualizados e os funcionários treinados e orientados a aplicarem os procedimentos devendo no início de cada turno de trabalho ou após nova preparação da máquina ou equipamento, efetuar inspeção rotineira das condições de operacionalidade e segurança.',
        relatorio: reportId,
      },
    },
    {
      id: '2',
      reportId: reportId,
      form: {
        perigo: 'Máquina/equipamento sem procedimento de trabalho e segurança',
        localizacao: 'Toda máquina',
        atividade: 'Operação, manutenção, ajustes e limpeza',
        consequenciaRisco: 'Equívocos na operação e manutenção da máquina',
        tipo: 'Mecânico, elétrico',
        arpo: '8',
        arfe: '2,5',
        arglp: '4',
        arnp: '1',
        erpo: '0,5',
        consideracaoCondAtual:
          'Não evidenciado que a máquina possui procedimentos de trabalho e segurança específicos e padronizados, não atende o item 12.14.1 da NR-12.',
        recomendacoes:
          'Providenciar a elaboração do procedimento de trabalho e segurança com descrição detalhada de cada tarefa, passo a passo, a partir da apreciação de riscos mantendo os trabalhadores treinados e orientados a aplicá-lo. Ao início de cada turno de trabalho ou após nova preparação da máquina ou equipamento, efetuar inspeção rotineira das condições de operacionalidade e segurança.',
        relatorio: reportId,
      },
    },
  ];
}
