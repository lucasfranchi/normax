import { ApreciacaoRiscoPresets } from '../apreciacao-risco';

export function getPresetReport6(reportId: string): ApreciacaoRiscoPresets[] {
  return [
    {
      id: '1',
      reportId: reportId,
      form: {
        perigo: 'Componentes pressurizados - Item conforme',
        localizacao: '-',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Lesões pelo corpo',
        tipo: 'Mecânico',
        arpo: '0,5',
        arfe: '5',
        arglp: '4',
        arnp: '1',
        erpo: '0,5',
        consideracaoCondAtual:
          'Não evidenciado problemas com os componentes pressurizados que possam causar riscos diretos aos profissionais que interagem com a máquina, atendendo os requisitos estabelecidos pelo item 12.7 da NR-12.',
        recomendacoes:
          'Manter os componentes pressurizados da máquina em perfeito estado de conservação.',
        relatorio: reportId,
      },
    },
    {
      id: '2',
      reportId: reportId,
      form: {
        perigo: 'Não aplicável (NA)',
        localizacao: 'NA',
        atividade: 'NA',
        consequenciaRisco: 'NA',
        tipo: 'NA',
        arpo: 'NA',
        arfe: 'NA',
        arglp: 'NA',
        arnp: 'NA',
        erpo: 'NA',
        consideracaoCondAtual:
          'Não aplicável, pois a máquina não possui componentes pressurizados.',
        recomendacoes:
          'Não aplicável, pois a máquina não possui componentes pressurizados.',
        relatorio: reportId,
      },
    },
    {
      id: '3',
      reportId: reportId,
      form: {
        perigo: 'Componentes pressurizados sem proteção',
        localizacao:
          'Ao redor da máquina, lado direito da máquina, lado esquerdo da máquina, em frente a máquina, parte traseira da máquina',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Lesões, corte, impacto',
        tipo: 'Mecânico',
        arpo: '5',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Não evidenciado proteção nas mangueiras, tubulações e demais componentes pressurizados sujeitos a eventuais impactos mecânicos e outros agentes agressivos, não atende o item 12.7.1 da NR-12.',
        recomendacoes:
          'Adotar proteção das mangueiras sujeitas a eventuais impactos mecânicos e/ou agentes agressivos.',
        relatorio: reportId,
      },
    },
    {
      id: '4',
      reportId: reportId,
      form: {
        perigo: 'Componentes pressurizados sem proteção e/ou mal localizado',
        localizacao:
          'Ao redor da máquina, lado direito da máquina, lado esquerdo da máquina, em frente a máquina, parte traseira da máquina',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Lesões pelo corpo',
        tipo: 'Mecânico, combinação de perigos',
        arpo: '5',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado que as mangueiras, tubulações e demais componentes pressurizados não estão localizados ou protegidos havendo a possibilidade de que uma situação de ruptura destes componentes ou de vazamentos de fluidos possa ocasionar acidentes de trabalho, não atende o item 12.7.2 da NR-12.',
        recomendacoes:
          'Adotar proteção nas mangueiras, tubulações e demais componentes pressurizados de forma que sua localização ou proteção previna acidentes no caso de ocorrer ruptura destes componentes e vazamentos de fluidos.',
        relatorio: reportId,
      },
    },
    {
      id: '5',
      reportId: reportId,
      form: {
        perigo: 'Mangueira sem indicação de pressão máxima de trabalho',
        localizacao:
          'Ao redor da máquina, lado direito da máquina, lado esquerdo da máquina, em frente a máquina, parte traseira da máquina',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Lesões, corte, impacto',
        tipo: 'Mecânico, combinação de perigos',
        arpo: '5',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado que as mangueiras utilizadas nos sistemas pressurizados não possuem indicação da pressão máxima de trabalho admissível especificada pelo fabricante, não atende o item 12.7.3 da NR-12.',
        recomendacoes:
          'Adotar nas mangueiras utilizadas nos sistemas pressurizados a indicação da pressão máxima de trabalho admissível especificada pelo fabricante.',
        relatorio: reportId,
      },
    },
    {
      id: '6',
      reportId: reportId,
      form: {
        perigo: 'Sistema pressurizado sem vávulas de alívio',
        localizacao:
          'Ao redor da máquina, lado direito da máquina, lado esquerdo da máquina, em frente a máquina, parte traseira da máquina',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Lesões, corte, impacto',
        tipo: 'Mecânico, combinação de perigos',
        arpo: '5',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Não evidenciado que os sistemas pressurizados das máquinas possuam meios ou dispositivos destinados a garantir que a pressão máxima de trabalho não seja excedida e/ou que as quedas de pressão e perdas de vácuo possam gerar perigo, não atende o item 12.7.4 da NR-12.',
        recomendacoes:
          'Adotar, nos sistemas pressurizados das máquinas, meios ou dispositivos destinados a garantir que: a) a pressão máxima de trabalho admissível nos circuitos não possa ser excedida; e b) quedas de pressão progressivas ou bruscas e perdas de vácuo não possam gerar perigo.',
        relatorio: reportId,
      },
    },
  ];
}
