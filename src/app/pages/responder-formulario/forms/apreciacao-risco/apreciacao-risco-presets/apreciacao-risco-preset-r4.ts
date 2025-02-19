import { ApreciacaoRiscoPresets } from '../apreciacao-risco';

export function getPresetReport4(reportId: string): ApreciacaoRiscoPresets[] {
  return [
    {
      id: '1',
      reportId: reportId,
      form: {
        perigo: 'Elementos móveis e/ou cortantes - Item conforme',
        localizacao: 'Perímetro da máquina',
        atividade: 'Operação, manutenção',
        consequenciaRisco: 'Esmagamento, corte, amputação',
        tipo: 'Mecânico, combinação de perigos',
        arpo: '0,5',
        arfe: '5',
        arglp: '4',
        arnp: '1',
        erpo: '0,5',
        consideracaoCondAtual:
          'Não evidenciado problemas com o tópico Sistemas de Segurança que possam causar riscos diretos aos profissionais que interagem com a máquina, atendendo os requisitos estabelecidos pelo item 12.5 da NR-12.',
        recomendacoes:
          'Manter as proteções e dispositivos em seus devidos lugares. Não retirar nem alterar as proteções e dispositivos que garantem o funcionamento adequado e seguro dos equipamentos, evitando assim a ocorrência de acidentes.',
        relatorio: reportId,
      },
    },
    {
      id: '2',
      reportId: reportId,
      form: {
        perigo: 'Zona de perigo sem sistema de segurança',
        localizacao: '-',
        atividade: 'Operação, manutenção, ajuste',
        consequenciaRisco: 'Esmagamento, segurar ou prender',
        tipo: 'Mecânico',
        arpo: '8',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado que, na zona de perigo identificada, não há sistemas de segurança com proteções fixas ou proteções móveis com intertravamento que resguardem a saúde e a integridade física dos trabalhadores, não atende o item 12.5.1 da NR-12.',
        recomendacoes:
          'Adotar na zona de perigo identificada sistemas de segurança com proteções fixas ou proteções móveis com intertravamento de modo que se neutralize o acesso por todos os lados à referida zona, resguardando a integridade física do trabalhador.',
        relatorio: reportId,
      },
    },
    {
      id: '3',
      reportId: reportId,
      form: {
        perigo: 'Dispositivo possibilita burla',
        localizacao: '-',
        atividade: ' Operação, manutenção',
        consequenciaRisco: ' Esmagamento, segurar ou prender',
        tipo: 'Mecânico',
        arpo: '8',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado que os sistemas de segurança não estão instalados de modo que dificultem a sua burla, não atende o item 12.5.2(d) da NR-12.',
        recomendacoes:
          'Adequar as instalações dos sistemas de segurança de modo que dificulte a sua burla.',
        relatorio: reportId,
      },
    },
    {
      id: '4',
      reportId: reportId,
      form: {
        perigo: 'Falta de monitoramento dos sistemas de segurança',
        localizacao: 'Sistema de comando máquina',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Acidentes por falha nos dispositivos de segurança',
        tipo: 'Mecânico',
        arpo: '8',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Não evidenciado que o dispositivo de parada de emergência se mantém sob vigilância automática, ou seja, monitoramento de acordo com a categoria de segurança requerida, não atende o item 12.5.2(e) da NR-12.',
        recomendacoes:
          'Adotar interface de segurança (relês de segurança; CLP de segurança) disposto com rearme manual (RESET), de modo a realizar o monitoramento dos sistemas de segurança conforme categoria de risco indicada, para que possam reduzir os riscos de acidentes quando ocorrer uma falha das funções de segurança. \n' +
          'Obs.: Após a instalação dos dispositivos, os diagramas elétricos da máquina devem ser atualizados de acordo com a atual realidade sob a responsabilidade de profissional legalmente habilitado.',
        relatorio: reportId,
      },
    },
    {
      id: '5',
      reportId: reportId,
      form: {
        perigo: 'Sistema de segurança não paraliza movimento perigoso',
        localizacao: '-',
        atividade: 'Operação, manutenção',
        consequenciaRisco: 'Esmagamento, segurar ou prender',
        tipo: 'Mecânico',
        arpo: '8',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado que os sistemas de segurança não possuem paralisação dos movimentos perigosos e demais riscos quando ocorrerem falhas ou situações anormais de trabalhos, não atende o item 12.5.2(f) da NR-12.',
        recomendacoes:
          'Adotar dispositivos de intertravamento que garantam a paralisação de suas funções perigosas, quando as proteções forem abertas durante a operação.',
        relatorio: reportId,
      },
    },
    {
      id: '6',
      reportId: reportId,
      form: {
        perigo: 'Reinício das funções segurança da máquina',
        localizacao: 'Sistema de comando máquina',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Esmagamento, segurar ou prender',
        tipo: 'Mecânico, combinação de perigos',
        arpo: '5',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado que os sistemas de segurança não possuem rearme, ou reset manual, para acionamento após a correção da falha ou situação anormal de trabalho que provocou a paralisação da máquina, não atende o item 12.5.3 da NR-12.',
        recomendacoes:
          'Adotar botão de rearme (reset), para acionamento após a correção da falha ou situação anormal de trabalho que provocou a paralisação da máquina.',
        relatorio: reportId,
      },
    },
    {
      id: '7',
      reportId: reportId,
      form: {
        perigo: 'Proteção não fixada corretamente',
        localizacao: '-',
        atividade: 'Operação, manutenção',
        consequenciaRisco: 'Esmagamento, segurar ou prender',
        tipo: 'Mecânico',
        arpo: '5',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado que a proteção fixa não está mantida por meio de elementos de fixação que só permitam sua remoção ou abertura com o uso de ferramentas, não atende o item 12.5.4(a) da NR-12.',
        recomendacoes:
          'Adotar elementos de fixação que só permitam sua remoção ou abertura com o uso de ferramentas nas proteções fixas. A proteção só deve ser removida com a máquina bloqueada.',
        relatorio: reportId,
      },
    },
    {
      id: '8',
      reportId: reportId,
      form: {
        perigo: 'Elementos rotativos / transmissão de força',
        localizacao: '-',
        atividade: 'Operação, manutenção',
        consequenciaRisco: 'Esmagamento, fratura, amputação',
        tipo: 'Mecânico',
        arpo: '8',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado que as transmissões de força e os componentes móveis a elas interligados, acessíveis ou expostos, oferece riscos e não possui proteções fixas ou móveis com intertravamento, que impeçam o acesso por todos os lados, não atende o item 12.5.9 da NR-12.',
        recomendacoes:
          'Adotar proteções fixas que impeçam o acesso por qualquer lado, nas transmissões de força e os componentes móveis a elas interligados acessíveis ou expostos.',
        relatorio: reportId,
      },
    },
    {
      id: '9',
      reportId: reportId,
      form: {
        perigo: 'Proteção com arestas cortantes e/ou saliências perigosas',
        localizacao: '-',
        atividade: 'Operação, manutenção',
        consequenciaRisco: 'Corte',
        tipo: 'Mecânico',
        arpo: '8',
        arfe: '4',
        arglp: '0,5',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado que as proteções não atendem os requisitos de segurança pois possuem extremidades e arestas cortantes ou outras saliências perigosas, não atende o item 12.5.10 da NR-12.',
        recomendacoes:
          'Adotar proteções livres de extremidades e/ou arestas cortantes ou outras saliências perigosas.',
        relatorio: reportId,
      },
    },
    {
      id: '10',
      reportId: reportId,
      form: {
        perigo:
          'Zona de perigo protejeda sem dispositivo de parada de emergência em seu interior',
        localizacao: 'Perímetro da máquina',
        atividade: 'Operação, manutenção',
        consequenciaRisco: 'Acidentes na operação',
        tipo: 'Mecânico',
        arpo: '8',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Não evidenciado dispositivo de parada de emergência no interior da zona protegida pelo sistema, não atende o item 12.5.13.3  da NR-12.',
        recomendacoes:
          'Adotar dispositivos de parada de emergência, conforme categoria de segurança, localizados no interior da zona protegida pelo sistema, bem como meios de liberar pessoas presas dentro dela.',
        relatorio: reportId,
      },
    },
    {
      id: '11',
      reportId: reportId,
      form: {
        perigo:
          'Zona de perigo protejeda sem dispositivo de parada de emergência em seu interior',
        localizacao: 'Perímetro da máquina',
        atividade: 'Operação, manutenção',
        consequenciaRisco: 'Acidentes na operação',
        tipo: 'Mecânico',
        arpo: '8',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Não evidenciado dispositivo de parada de emergência no interior da zona protegida pelo sistema, não atende o item 12.5.13.3  da NR-12.',
        recomendacoes:
          'Adotar dispositivos de parada de emergência, conforme categoria de segurança, localizados no interior da zona protegida pelo sistema, bem como meios de liberar pessoas presas dentro dela.',
        relatorio: reportId,
      },
    },
    {
      id: '12',
      reportId: reportId,
      form: {
        perigo:
          'Sistema de segurança sem projeto, diagrama ou representação esquemática ',
        localizacao: 'Documentação da máquina',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Combinação de riscos',
        tipo: 'Mecânico, elétrico',
        arpo: '5',
        arfe: '1,5',
        arglp: '8',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Não evidenciado o projeto, diagrama ou representação esquemática dos sistemas de segurança da máquina e documentação técnica da máquina, sob a responsabilidade de um profissional legalmente habilitado, não atende os itens 12.5.17 e 12.5.2(b) da NR-12.',
        recomendacoes:
          'Apresentar projeto, diagrama ou representação esquemática dos sistemas de segurança de máquinas e documentação técnica da máquina que esteja sob a responsabilidade de profissional legalmente habilitado e com respectiva Anotação de Responsabilidade Técnica do Conselho Regional de Engenharia e Arquitetura - ART/CREA.',
        relatorio: reportId,
      },
    },
  ];
}
