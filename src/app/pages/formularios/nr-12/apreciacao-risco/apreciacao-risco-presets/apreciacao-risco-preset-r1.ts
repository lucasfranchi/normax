import { ApreciacaoRiscoPresets } from '../apreciacao-risco';

export function getPresetReport1(reportId: string): ApreciacaoRiscoPresets[] {
  return [
    {
      id: '1',
      reportId: reportId,
      form: {
        perigo: 'Meios de circulação - Item conforme',
        localizacao: 'Em todo perímetro da máquina',
        atividade: 'Operação, manutenção, ajustes e limpeza da máquina',
        consequenciaRisco: 'Torções e pequenos ferimentos',
        tipo: 'Mecânico',
        arpo: '1',
        arfe: '5',
        arglp: '1',
        arnp: '1',
        erpo: '1',
        consideracaoCondAtual:
          'No momento da vistoria, não foi evidenciado situações de risco geradas diretamente pelo arranjo físico e instalações da máquina, atendendo os requisitos estabelecidos pelo item 12.2 da NR-12.',
        recomendacoes:
          'Manter as áreas de circulação em torno da máquina desobstruídas, identificadas e livres de objetos, ferramentas e substâncias escorregadias.',
        relatorio: reportId,
      },
    },
    {
      id: '2',
      reportId: reportId,
      form: {
        perigo: 'Falta de sinalização e demarcação',
        localizacao: 'Ao redor da máquina',
        atividade: 'Operação, manutenção, ajustes e limpeza da máquina',
        consequenciaRisco:
          'Aproximação de pessoas não autorizadas nas proximidades da máquina',
        tipo: 'Mecânico, elétrico, térmico, ligado a ruído e/ou vibração, ligado a radiação, material e/ou substância perigosa, ergonômico, associado ao ambiente o qual a máquina é utilizada, combinação de perigos, não identificado',
        arpo: '8',
        arfe: '5',
        arglp: '2',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado que nos locais de instalações as áreas de circulação não estão devidamente demarcadas e em conformidade com as normas técnicas oficiais, não atende o item 12.2.1 da NR-12.',
        recomendacoes:
          'Adotar faixas de sinalização e demarcação de forma a restringir o acesso de trabalhadores não autorizados à máquina, nos locais de instalação e nas áreas de circulação da máquina.',
        relatorio: reportId,
      },
    },
    {
      id: '3',
      reportId: reportId,
      form: {
        perigo: 'Área de circulação obstruída',
        localizacao: 'Ao redor da máquina',
        atividade: 'Intervenções gerais na máquina',
        consequenciaRisco:
          'Risco de quedas de mesmo nível e/ou dificuldade de circulação em caso de emergência',
        tipo: 'Mecânico',
        arpo: '10',
        arfe: '4',
        arglp: '1',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado que as áreas de circulação não estão mantidas desobstruídas, não atende o item 12.2.1.2 da NR-12.',
        recomendacoes:
          'Desobstruir as áreas de circulação de materiais de maneira a facilitar a evasão das pessoas e para evitar riscos adicionais.',
        relatorio: reportId,
      },
    },
    {
      id: '4',
      reportId: reportId,
      form: {
        perigo: 'Espaço inadequado ao redor da máquina',
        localizacao: 'Ao redor da máquina',
        atividade: 'Intervenções gerais na máquina',
        consequenciaRisco:
          'Cortes, esmagamentos entre outros fatores relacionados com as características construtivas da máquina',
        tipo: 'Mecânico',
        arpo: '10',
        arfe: '4',
        arglp: '1',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Os espaços em torno da máquina não estão projetados, dimensionados e mantidos de forma que os trabalhadores e os transportadores de materiais, mecanizados e manuais, movimentem-se com segurança, não atende o item 12.2.3 da NR-12.',
        recomendacoes:
          'Providenciar estudo para verificar a possibilidade de adequar o leiaute em torno da máquina  de forma que os trabalhadores e os transportadores de materiais se movimentem com segurança.',
        relatorio: reportId,
      },
    },
    {
      id: '5',
      reportId: reportId,
      form: {
        perigo:
          'Ferramentas utilizadas no processo estão alocadas de forma que podem gerar riscos adicionais',
        localizacao: 'Nas proximidades da máquina',
        atividade: 'Operação, manutenção, ajustes e limpeza da máquina',
        consequenciaRisco:
          'Cortes, esmagamentos entre outros fatores relacionados com as características construtivas da máquina',
        tipo: 'Mecânico',
        arpo: '10',
        arfe: '4',
        arglp: '1',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'No momento da vistoria vários ferramentais estavam alocados de forma desorganizadas, ocasionamento riscos adicionais e não atendendo o item 12.2.5 da NR-12.',
        recomendacoes:
          'Aplicar os requisitos do programa 5S e organizar o ferramental ao redor da máquina.',
        relatorio: reportId,
      },
    },
    {
      id: '6',
      reportId: reportId,
      form: {
        perigo: 'Instalabilidade da máquina',
        localizacao: 'Máquina',
        atividade: 'Operação, manutenção, ajustes e limpeza da máquina',
        consequenciaRisco: 'Corte, esmagamento',
        tipo: 'Mecânico',
        arpo: '5',
        arfe: '4',
        arglp: '2',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado que a máquina não possui medidas preventivas quanto à sua estabilidade, de modo que não basculhe e não se desloque intempestivamente por vibrações, choques, forças externas previsíveis, forças dinâmicas internas ou qualquer outro motivo acidental, não atende o item 12.2.6 da NR-12.',
        recomendacoes:
          'Aplicar estudo estrutural com objetivo de indicar medidas de adequações para garantir a estabilidade da máquina. O estudo deverá ser realizado por profissional habilitado com atribuições profissionais compatíveis com o tema.',
        relatorio: reportId,
      },
    },
    {
      id: '7',
      reportId: reportId,
      form: {
        perigo: 'Máquina móvel sem travas nos rodízios',
        localizacao: 'Apoio da máquina',
        atividade: 'Intervenções gerais na máquina',
        consequenciaRisco:
          'Movimentação inesperada da máquina, causando combinação de danos',
        tipo: 'Mecânico',
        arpo: '8',
        arfe: '4',
        arglp: '2',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado que máquina/equipamento não possui travas em pelo ao menos 2 (dois) rodízios, gerando risco inesperado de movimento e não atendendo os requisitos do item 12.2.7 da NR-12.',
        recomendacoes: 'Providenciar travas para os rodízios da máquina.',
        relatorio: reportId,
      },
    },
    {
      id: '8',
      reportId: reportId,
      form: {
        perigo: 'Movimentação de carga sobre postos de trabalho',
        localizacao: 'Sobre a máquina',
        atividade: 'Operação, manutenção, ajustes e limpeza da máquina',
        consequenciaRisco: 'Queda de materiais, esmagamento, ferimentos graves',
        tipo: 'Mecânico',
        arpo: '2',
        arfe: '4',
        arglp: '15',
        arnp: '1',
        erpo: '0,5',
        consideracaoCondAtual:
          'Evidenciado que existe movimentação de carga sobre os postos de trabalho, não atendendo os requisitos estabelecidos pelo item 12.2.8 da NR-12',
        recomendacoes:
          'Providenciar estudo para verificar a possibilidade de alteração do leiaute atual do setor com objetivo de evitar movimentação de carga sobre os postos de trabalho e/ou restringir acesso a máquina no momento da movimentação da carga, garantindo-se a sinalização visual e sonora.',
        relatorio: reportId,
      },
    },
  ];
}
