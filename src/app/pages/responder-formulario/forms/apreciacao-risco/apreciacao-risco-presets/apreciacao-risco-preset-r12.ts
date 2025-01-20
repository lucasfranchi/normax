import {ApreciacaoRiscoPresets} from "../apreciacao-risco";

export function getPresetReport12(reportId: string): ApreciacaoRiscoPresets[] {
  return [
    {
      id: '1',
      reportId: reportId,
      form: {
        perigo: 'Manual de instruções - Item conforme',
        localizacao: 'Toda máquina',
        atividade: 'Operação, manutenção, limpeza e ajustes',
        consequenciaRisco: 'Acidentes gerais por interpretação errônea do funcionamento da máquina',
        tipo: 'Mecânico, elétrico',
        arpo: '0,5',
        arfe: '1,5',
        arglp: '4',
        arnp: '1',
        erpo: '0,5',
        consideracaoCondAtual: 'Não evidenciado problema com o Manual de Instruções que possa causar riscos direto aos profissionais que interagem com a máquina, atendendo os requisitos estabelecidos pelo item 12.13 da NR-12.',
        recomendacoes: 'Manter o manual instrução com as informações relativas à segurança de todas as fases de utilização legível e disponível a todos os usuários no local de trabalho.',
        relatorio: reportId,
      }
    }, {
      id: '2',
      reportId: reportId,
      form: {
        perigo: 'Máquina/equipamento sem manual de instruções',
        localizacao: 'Toda máquina',
        atividade: 'Operação, manutenção, limpeza e ajustes',
        consequenciaRisco: 'Acidentes gerais por interpretação errônea do funcionamento da máquina',
        tipo: 'Mecânico, elétrico',
        arpo: '8',
        arfe: '1,5',
        arglp: '4',
        arnp: '1',
        erpo: '0,5',
        consideracaoCondAtual: 'Não evidenciado, no dia da vistoria, o manual de Instruções da máquina contendo as informações relativas à segurança de todas as fases de utilização, não atende ao item 12.13.1 da NR-12.',
        recomendacoes: 'As máquinas e equipamentos devem possuir manual de instruções fornecido pelo fabricante ou importador, com informações relativas à segurança em todas as fases de utilização. Quando inexistente ou extraviado, o manual deve ser reconstituído pelo empregador ou pessoa por ele designada, sob a responsabilidade de profissional qualificado ou legalmente habilitado.',
        relatorio: reportId,
      }
    }, {
      id: '3',
      reportId: reportId,
      form: {
        perigo: 'Manual de instruções em língua estrangeira',
        localizacao: 'Toda máquina',
        atividade: 'Operação, manutenção, limpeza e ajustes',
        consequenciaRisco: 'Acidentes gerais por interpretação errônea do funcionamento da máquina',
        tipo: 'Mecânico, elétrico',
        arpo: '8',
        arfe: '1,5',
        arglp: '4',
        arnp: '1',
        erpo: '0,5',
        consideracaoCondAtual: 'Evidenciado que o Manual de Instruções está escrito em língua estrangeira podendo acontecer interpretação errônea do funcionamento da máquina, não atente 12.13.2(a) da NR-12.',
        recomendacoes: 'Providenciar a tradução do manual de instruções contendo as informações relativas à segurança de todas as fases de utilização, ou, reconstituí-lo de acordo com as exigências da NR-12. O manual deve estar disponível a todos os usuários no local de trabalho.',
        relatorio: reportId,
      }
    },
  ]
}
