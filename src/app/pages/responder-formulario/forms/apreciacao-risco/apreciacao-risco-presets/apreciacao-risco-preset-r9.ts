import {ApreciacaoRiscoPresets} from "../apreciacao-risco";

export function getPresetReport9(reportId: string): ApreciacaoRiscoPresets[] {
  return [
    {
      id: '1',
      reportId: reportId,
      form: {
        perigo: 'Medidas de controle dos agentes- Item conforme',
        localizacao: 'Em toda máquina',
        atividade: 'Operação, manutenção, ajustes e limpeza',
        consequenciaRisco: 'Doenças ocupacionais',
        tipo: 'Mecânico, material e/ou substâncias perigosas, térmico',
        arpo: '0,5',
        arfe: '5',
        arglp: '2',
        arnp: '1',
        erpo: '0,5',
        consideracaoCondAtual: 'De acordo com as informações concedidas pela XXXXXX, a organização possui  implementado um Programa de Gerenciamento de Riscos - PGR para todas as máquinas, conforme NR-01. O documento foi elaborado por XXXXX e é datado de XX/XX/XXXX. \n' +
          '\n' +
          'OBS: No momento da inspeção em campo, todo os funcionários estavam utilizando equipamento de proteção individual.',
        recomendacoes: 'Manter os programas de segurança em atendimento as Normas Regulamentadoras.',
        relatorio: reportId,
      }
    }, {
      id: '2',
      reportId: reportId,
      form: {
        perigo: 'Falta de medidas de controle dos agentes tal como mas não limitado a ruído, vibrações, calor',
        localizacao: 'Em toda máquina',
        atividade: 'Operação, manutenção, ajustes e limpeza',
        consequenciaRisco: 'Acidentes e doenças ocupacionais',
        tipo: 'Mecânico, material e/ou substâncias perigosas, térmico',
        arpo: '8',
        arfe: '4',
        arglp: '2',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual: 'Não evidenciado Programa de Gerenciamento de Riscos – PGR, não atende aos itens 12.10.2 da NR-12 e 1.5.3.2 da NR 01 – Disposições Gerais e Gerenciamento de Riscos Ocupacionais. ',
        recomendacoes: 'Adotar Programa de Gerenciamento de Riscos – PGR, conforme NR-01.',
        relatorio: reportId,
      }
    }, {
      id: '3',
      reportId: reportId,
      form: {
        perigo: 'Queimaduras através de superfícies aquecidas',
        localizacao: 'Ao redor da máquina, lado direito da máquina, lado esquerdo da máquina, em frente a máquina, parte traseira da máquina',
        atividade: 'Operação, manutenção, ajustes e limpeza',
        consequenciaRisco: 'Acidentes e doenças ocupacionais',
        tipo: 'Térmico',
        arpo: '8',
        arfe: '2,5',
        arglp: '2',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual: 'Evidenciado que a máquina possui superfícies e áreas aquecidas, que podem causar queimaduras pelo contato da pele, não atende o item 12.10.4 da NR-12.',
        recomendacoes: 'Adotar medidas de proteção contra queimaduras, causadas pelo contato da pele com superfícies aquecidas da máquina, tais como isolação com materiais apropriados e/ou barreiras.',
        relatorio: reportId,
      }
    },
  ]
}
