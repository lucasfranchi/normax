import { ApreciacaoRiscoPresets } from '../apreciacao-risco';

export function getPresetReport14(reportId: string): ApreciacaoRiscoPresets[] {
  return [
    {
      id: '1',
      reportId: reportId,
      form: {
        perigo: 'Capacitação - Item conforme',
        localizacao: 'Toda máquina',
        atividade: 'Operação, manutenção, inspeção e demais intervenções',
        consequenciaRisco:
          'Combinação de acidentes decorrentes do desconhecimento dos riscos da máquina',
        tipo: 'Mecânico, elétrico, combinação de perigos',
        arpo: '0,1',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'De acordo com as informações concedidas pela XXXXXX, todos os trabalhadores envolvidos na operação, manutenção e demais intervenções na máquina, possuem o Curso de Capacitação conforme Anexo II da NR-12, atendendo os requisitos estabelecidos pelo item 12.16 da NR-12.',
        recomendacoes:
          'Manter os trabalhadores sempre treinados e capacitados conforme suas funções, e que estejam cientes dos riscos à que estão expostos nas operações das máquinas.',
        relatorio: reportId,
      },
    },
    {
      id: '2',
      reportId: reportId,
      form: {
        perigo: 'Trabalhadores sem capacitação',
        localizacao: 'Toda máquina',
        atividade: 'Operação, manutenção, inspeção e demais intervenções',
        consequenciaRisco:
          'Combinação de acidentes decorrentes do desconhecimento dos riscos da máquina',
        tipo: 'Mecânico, elétrico, combinação de perigos',
        arpo: '5',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado que os operadores envolvidos na operação não possuem capacitação conforme Anexo II, não atende o item 12.16.2 da NR-12.',
        recomendacoes:
          'Os trabalhadores envolvidos na operação, manutenção, inspeção e demais intervenções em máquinas e equipamentos devem receber capacitação providenciada pelo empregador e compatível com suas funções, que aborde os riscos a que estão expostos e as medidas de proteção existentes e necessárias, nos termos da NR-12 e conforme Anexo II.',
        relatorio: reportId,
      },
    },
  ];
}
