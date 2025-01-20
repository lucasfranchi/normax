import {ApreciacaoRiscoPresets} from "../apreciacao-risco";

export function getPresetReport8(reportId: string): ApreciacaoRiscoPresets[] {
  return [
    {
      id: '1',
      reportId: reportId,
      form: {
        perigo: 'Postura e/ou ambiente inadequado - Item conforme',
        localizacao: 'Em toda máquina',
        atividade: 'Operação, manutenção, ajustes, limpeza',
        consequenciaRisco: 'Doenças ocupacionais',
        tipo: 'Ergonômico',
        arpo: '0,5',
        arfe: '5',
        arglp: '2',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual: 'De acordo com as informações concedidas pela XXXXXX, os postos de trabalho passaram por avaliação ergonômica conforme NR-17. O documento foi elaborado por XXXXX e é datado de XX/XX/XXXX. \n' +
          '\n' +
          'Obs.: No momento da inspeção em campo, não foram evidenciadas situações ergonômicas relevantes, porém ressalta-se que as avaliações se limitaram às observações visuais e de características construtivas da máquina e no local de instalação da máquina.',
        recomendacoes: 'Atender os requisitos solicitados pela avaliação ergonômica atual.\n' +
          '\n' +
          'A empresa deverá garantir a avaliação ergonômica em conformidade com a Norma NR-17, levando em consideração as características antropométricas dos profissionais que irão interagir com a máquina.',
        relatorio: reportId,
      }
    }, {
      id: '2',
      reportId: reportId,
      form: {
        perigo: 'Postura e/ou ambiente inadequado',
        localizacao: 'Em toda máquina',
        atividade: 'Operação, manutenção, ajustes, transporte de materiais',
        consequenciaRisco: 'Fadiga, estresse, má postura, distúrbios',
        tipo: 'Ergonômico',
        arpo: '8',
        arfe: '4',
        arglp: '2',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual: 'Não evidenciada avaliação ergonômica conforme NR-17, não atende o item 12.9 da NR-12.',
        recomendacoes: 'Evidenciado no momento da vistoria situações relacionadas com ergonomia, porém a análise específica dos esforços inadequados, posturas incorretas e repetitivas de cada posto de trabalho devem ser apresentadas em detalhes na avaliação ergonômica, conforme indicações da NR-17.',
        relatorio: reportId,
      }
    }, {
      id: '3',
      reportId: reportId,
      form: {
        perigo: 'Postura e/ou ambiente inadequado',
        localizacao: 'Em toda máquina',
        atividade: 'Operação, manutenção, ajustes, transporte de materiais',
        consequenciaRisco: 'Fadiga, estresse, má postura, distúrbios',
        tipo: 'Ergonômico',
        arpo: '8',
        arfe: '4',
        arglp: '2',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual: 'Não evidenciada avaliação ergonômica conforme NR-17 e informado que a análise está em elaboração, não atende o item 12.9 da NR-12.',
        recomendacoes: 'As Máquinas e equipamentos devem ser projetados, construídos e operados levando em consideração a necessidade de adaptação das condições de trabalho às características psicofisiológicas dos trabalhadores e à natureza dos trabalhos a executar, oferecendo condições de conforto e segurança no trabalho, observado o disposto na NR-17.\n' +
          'Evidenciado no momento da vistoria situações relacionadas com ergonomia (exigências posturais, esforços físicos etc.), porém a análise especifica dos esforços inadequados, posturas incorretas e repetitivas de cada posto de trabalho serão apresentadas em detalhes na avaliação ergonômica que está em elaboração, conforme indicações da NR17. Sugerimos que sempre que ocorrerem ampliações, criação de novos setores e novas rotinas operacionais, seja feita uma reavaliação do laudo existente, para averiguar e apontar a realidade da empresa, visando à análise e cobertura de todos os postos de trabalho, mantendo-os sempre atualizados com os esforços ergonômicos existentes.',
        relatorio: reportId,
      }
    },
  ]
}
