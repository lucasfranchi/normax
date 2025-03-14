import { ApreciacaoRiscoPresets } from '../apreciacao-risco';

export function getPresetReport7(reportId: string): ApreciacaoRiscoPresets[] {
  return [
    {
      id: '1',
      reportId: reportId,
      form: {
        perigo: 'Transportadores - Item conforme',
        localizacao: '-',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Corte, esmagamento',
        tipo: 'Mecânico',
        arpo: '0,5',
        arfe: '5',
        arglp: '2',
        arnp: '1',
        erpo: '0,5',
        consideracaoCondAtual:
          'Não evidenciados problemas com os Transportadores de Materiais que possam causar riscos diretos aos profissionais que interagem com a máquina, atendendo os requisitos estabelecidos pelo item 12.8 da NR-12.',
        recomendacoes:
          'Manter os transportadores de materiais com suas proteções fixas corretamente posicionadas e seus dispositivos de parada de emergência tipo cabo instalados operando tracionados e obedecendo distância máxima entre as chaves, conforme fabricante.',
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
          'Não aplicável, pois a máquina não possui transportadores de materiais.',
        recomendacoes:
          'Não aplicável, pois a máquina não possui transportadores de materiais.',
        relatorio: reportId,
      },
    },
    {
      id: '3',
      reportId: reportId,
      form: {
        perigo: 'Elementos móveis acessíveis',
        localizacao: '-',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Escoriação, esmagamento, corte, fratura',
        tipo: 'Mecânico',
        arpo: '8',
        arfe: '4',
        arglp: '2',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado que os movimentos perigosos dos transportadores contínuos de materiais, acessíveis durante a operação normal, não estão protegidos, especialmente nos pontos de esmagamento, agarramento e aprisionamento, não atende o item 12.8.1 da NR-12.',
        recomendacoes:
          'Adotar proteções físicas nos movimentos perigosos dos transportadores contínuos de materiais (esteiras, correias, roletes, acoplamentos, freios, roldanas, amostradores, volantes, tambores, engrenagens, cremalheiras, correntes, guias, alinhadores, região do esticamento e contrapeso) acessíveis durante a operação normal evitando acessos de mãos e dedos por todos os lados.',
        relatorio: reportId,
      },
    },
    {
      id: '4',
      reportId: reportId,
      form: {
        perigo:
          'Transportador contínuo sem dispositivo de parada de emergência adequado',
        localizacao: 'Lateral transportador',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Acidentes na operação, esmagamento, enrolamento',
        tipo: 'Mecânico, combinação de perigos',
        arpo: '8',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado que os transportadores contínuos acessíveis aos trabalhadores não dispõem, ao longo de sua extensão, de dispositivos de parada de emergência, de modo que possam ser acionados em todas as posições de trabalho, não atende o item 12.8.7 da NR-12.',
        recomendacoes:
          'Adotar dispositivos de parada de emergência (tipo cabo) ao longo da extensão dos transportadores contínuos acessíveis aos trabalhadores de modo que possam ser acionados em todas as posições de trabalho.',
        relatorio: reportId,
      },
    },
  ];
}
