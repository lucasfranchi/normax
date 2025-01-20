import {ApreciacaoRiscoPresets} from "../apreciacao-risco";

export function getPresetReport17(reportId: string): ApreciacaoRiscoPresets[] {
  return [
    {
      id: '1',
      reportId: reportId,
      form: {
        perigo: 'Quedas em meio de acesso em máquinas - Item conforme',
        localizacao: 'Meio de acesso',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Queda',
        tipo: 'Mecânico',
        arpo: '0,1',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual: 'Não evidenciado problemas com os meios de acesso à máquina que possam causar riscos diretos aos trabalhadores que interagem com a máquina, atendendo os requisitos estabelecidos pelo Anexo III – Meios de Acesso a Máquina e Equipamentos da NR-12.',
        recomendacoes: 'Manter os acessos à máquina fixados e seguros nos pontos de operação, abastecimento, preparação, manutenção, intervenção inibindo riscos de acidentes e facilitando o acesso e utilização pelos trabalhadores.',
        relatorio: reportId,
      }
    }, {
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
        consideracaoCondAtual: 'Não aplicável, pois a máquina não possui meios de acesso permanentes.',
        recomendacoes: 'Não aplicável, pois a máquina não possui meios de acesso permanentes.',
        relatorio: reportId,
      }
    }, {
      id: '3',
      reportId: reportId,
      form: {
        perigo: 'Meio de acesso sem guarda-corpo',
        localizacao: '-',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Queda',
        tipo: 'Mecânico',
        arpo: '5',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual: 'Evidenciado meio de acesso sem sistema de proteção contra quedas, podendo ocasionar queda, não atende o item 1 e 7 do Anexo III – Meios de Acesso a Máquina e Equipamentos da NR-12.',
        recomendacoes: 'Adotar guarda-corpo fixo (sistema de proteção contra quedas) com as seguintes características: travessão superior (que não possua superfície plana) instalado de 1,10 m a 1,20 m de altura em relação ao piso (em ambos os lados) e possuir rodapé de, no mínimo, 0,20 m de altura e travessão intermediário a 0,70 m de altura em relação ao piso, localizado entre o rodapé e o travessão superior.',
        relatorio: reportId,
      }
    }, {
      id: '4',
      reportId: reportId,
      form: {
        perigo: 'Travessões superiores com superfície plana',
        localizacao: 'Meio de acesso',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Queda de objetos',
        tipo: 'Mecânico',
        arpo: '5',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual: 'Evidenciado que os travessões superiores das plataformas de acesso são de superfície plana, podendo ocasionar apoio de objetos, não atende o item 7d do Anexo III – Meios de Acesso a Máquina e Equipamentos da NR-12.',
        recomendacoes: 'Os travessões superiores não devem possuir superfície plana, a fim de evitar a colocação de objetos.',
        relatorio: reportId,
      }
    }, {
      id: '5',
      reportId: reportId,
      form: {
        perigo: 'Guarda corpo sem rodapé',
        localizacao: 'Meio de acesso',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Queda, Queda de objetos',
        tipo: 'Mecânico',
        arpo: '5',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual: 'Evidenciada falta de rodapé no guarda corpo, não atende ao item 7e do Anexo III – Meios de Acesso a Máquina e Equipamentos da NR-12.',
        recomendacoes: 'Adotar rodapé de, no mínimo, 0,20 m (vinte centímetros) de altura, em ambos os lados das plataformas evidenciadas.',
        relatorio: reportId,
      }
    },
  ]
}
