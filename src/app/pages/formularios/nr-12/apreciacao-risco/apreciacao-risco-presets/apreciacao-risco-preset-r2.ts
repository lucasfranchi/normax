import { ApreciacaoRiscoPresets } from '../apreciacao-risco';

export function getPresetReport2(reportId: string): ApreciacaoRiscoPresets[] {
  return [
    {
      id: '1',
      reportId: reportId,
      form: {
        perigo: 'Circuitos elétricas - Item conforme',
        localizacao: 'Máquina e painel',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Choque elétrico, morte',
        tipo: 'Elétrico, combinação de perigos',
        arpo: '0,5',
        arfe: '2,5',
        arglp: '15',
        arnp: '1',
        erpo: '0,5',
        consideracaoCondAtual:
          'Não evidenciado problemas com as Instalações e Dispositivos Elétricos que possam causar riscos diretos aos profissionais que interagem com a máquina, atendendo os requisitos estabelecidos pelo item 12.3 da NR-12.',
        recomendacoes:
          'Manter as Instalações e Dispositivos Elétricos em bom estado de conservação, aterrados, identificados, sinalizados de acordo com as normas técnicas e oficiais vigentes.',
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
          'Não aplicável pois a máquina não possui componentes elétricos.',
        recomendacoes:
          'Não aplicável pois a máquina não possui componentes elétricos.',
        relatorio: reportId,
      },
    },
    {
      id: '3',
      reportId: reportId,
      form: {
        perigo:
          'Instalações elétricas (cabos, eletrodutos, eletrocalhas) inadequados',
        localizacao:
          'Ao redor da máquina, lado direito da máquina, lado esquerdo da máquina, em frente a máquina, parte traseira da máquina',
        atividade: 'Operação, manutenção',
        consequenciaRisco: 'Choque elétrico, morte',
        tipo: 'Elétrico, combinação de perigos',
        arpo: '5',
        arfe: '2,5',
        arglp: '15',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado que as instalações elétricas da máquina não atendem os requisitos de segurança conforme normas técnicas, visto que a instalação atual pode colocar em risco a integridade dos profissionais que interagem com máquina, não atende o item 12.3.1 da NR-12.',
        recomendacoes:
          'Readequar as instalações elétricas da máquina conforme os requisitos da ABNT NBR 5410, ABNT NBR IEC 60204-1, NR-10 e outras normas pertinentes.',
        relatorio: reportId,
      },
    },
    {
      id: '4',
      reportId: reportId,
      form: {
        perigo: 'Cabos desorganizados no interior do painel',
        localizacao: 'Painel de comando e/ou potência',
        atividade: 'Operação, manutenção',
        consequenciaRisco:
          'Choque elétrico, arco elétrico, incêndio e/ou morte',
        tipo: 'Elétrico, combinação de perigos',
        arpo: '5',
        arfe: '1,5',
        arglp: '15',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado que os cabos elétricos  estão desorganizados no interior do painel, não atende os requisitos de segurança conforme normas técnicas e boas práticas, podendo gerar riscos aos profissionais que interagem com a máquina, não atende o item 12.3.1 da NR-12',
        recomendacoes:
          'Readequar o painel da máquina conforme os requisitos da ABNT NBR 5410, ABNT NBR IEC 60204-1, NR-10 e outras normas pertinentes.',
        relatorio: reportId,
      },
    },
    {
      id: '5',
      reportId: reportId,
      form: {
        perigo: 'Falta de aterramento na carcaça/invólucro do painel',
        localizacao: 'Carcaça/invólucro da máquina',
        atividade: 'Operação, manutenção',
        consequenciaRisco: 'Choque elétrico',
        tipo: 'Elétrico, combinação de perigos',
        arpo: '8',
        arfe: '2,5',
        arglp: '15',
        arnp: '1',
        erpo: '0,5',
        consideracaoCondAtual:
          'No momento da vistoria não foi evidenciado aterramento elétrico na carcaça/invólucro da máquina, possibilitando contato dos profissionais com corrente de fuga no equipamento. Não atende o item 12.3.2 da NR-12.',
        recomendacoes:
          'Providenciar instalação de aterramento elétrico na carcaça e ou invólucro da máquina em conformidade com as normas ABNT NBR 5410; ABNT NBR 5419; ABNT NBR IEC 60204-1 e NR-10 ou providenciar laudo técnico emitido por profissional devidamente habilitado que ateste que a estrutura da máquina está aterrada. ',
        relatorio: reportId,
      },
    },
    {
      id: '6',
      reportId: reportId,
      form: {
        perigo: 'Falta de aterramento elétrico da máquina.',
        localizacao: 'Toda máquina',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Choque elétrico',
        tipo: 'Elétrico, combinação de perigos',
        arpo: '8',
        arfe: '2,5',
        arglp: '15',
        arnp: '1',
        erpo: '0,5',
        consideracaoCondAtual:
          'No momento da vistoria não foi evidenciado aterramento elétrico  da máquina, possibilitando contato dos profissionais com corrente de fuga no equipamento. Não atende o item 12.3.2 da NR-12.',
        recomendacoes:
          'Providenciar instalação de aterramento elétrico para a  máquina em conformidade com as normas ABNT NBR 5410, ABNT NBR 5419, ABNT NBR IEC 60204-1 e NR-10 ou providenciar laudo técnico emitido por profissional devidamente habilitado que ateste que  máquina está aterrada. ',
        relatorio: reportId,
      },
    },
    {
      id: '7',
      reportId: reportId,
      form: {
        perigo: 'Condutor de alimentação sem proteção',
        localizacao: 'Fiação',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Choque elétrico',
        tipo: 'Elétrico',
        arpo: '5',
        arfe: '2,5',
        arglp: '15',
        arnp: '1',
        erpo: '0,5',
        consideracaoCondAtual:
          'Evidenciado que o condutor de alimentação elétrica não possui proteção contra possibilidade de rompimento mecânico, de contatos abrasivos e contatos com lubrificantes, combustível e calor, não atende o item 12.3.4(b) da NR-12.',
        recomendacoes:
          'Adequar os condutores de alimentação elétrica de maneira a reduzir o risco de choques elétricos, atendendo a requisitos da NR 12 e normas técnicas oficiais vigentes.',
        relatorio: reportId,
      },
    },
    {
      id: '8',
      reportId: reportId,
      form: {
        perigo: 'Porta de acesso ao painel aberta',
        localizacao: 'Painel',
        atividade: 'Operação, manutenção',
        consequenciaRisco: 'Acesso de pessoas não autorizadas, choque elétrico',
        tipo: 'Elétrico, combinação de perigos',
        arpo: '2',
        arfe: '2,5',
        arglp: '15',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado no momento da vistoria que porta de acesso do painel elétrico encontrava-se aberta, permitindo acesso de pessoas não autorizadas. Não atende o item 12.3.5(a)  da NR-12.',
        recomendacoes:
          'Providenciar o fechamento do painel e orientar a todos os envolvidos sobre a importância de manter a parta permanentemente fechada, salvo em intervenção para manutenção.',
        relatorio: reportId,
      },
    },
    {
      id: '9',
      reportId: reportId,
      form: {
        perigo: 'Falta de identificação externa do painel elétrico',
        localizacao: 'Painel de comando e/ou potência',
        atividade: 'Operação, manutenção, ajustes e limpeza',
        consequenciaRisco:
          'Possibilidade de acesso as partes energizadas por profissionais não autorizados e capacitados',
        tipo: 'Elétrico, combinação de perigos',
        arpo: '2',
        arfe: '2,5',
        arglp: '15',
        arnp: '1',
        erpo: '0,5',
        consideracaoCondAtual:
          'Evidenciado no momento da vistoria que o painel não possui sinalização de restrição de acesso e/ou sinalização de perigo contra choque elétrico. Não atende o item 12.3.5(b) da NR-12.',
        recomendacoes:
          'Providenciar a instalação de sinalização externa em conformidade com a NR-12 e NR-10.',
        relatorio: reportId,
      },
    },
    {
      id: '10',
      reportId: reportId,
      form: {
        perigo:
          'Acumulo de sujeira, quadro com aberturas  e/ou materiais e ferramentas no interior do painel elétrico',
        localizacao: 'Painel de comando e/ou potência',
        atividade: 'Operação, manutenção, ajustes e limpeza',
        consequenciaRisco: 'Incêndio, choque elétrico, arco elétrico',
        tipo: 'Elétrico, combinação de perigos',
        arpo: '5',
        arfe: '1,5',
        arglp: '15',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado acumulo de sujeiras no interior do painel, quadro com aberturas e/ou materiais ou ferramentas acondicionadas no interior do painel. Não atende o item 12.3.5 (c)  da NR-12.',
        recomendacoes:
          'Retirar todo material, ferramentas que não fazem parte da operação normal do painel e realizar limpeza geral deste mantendo seu bom estado de conservação, limpeza e livre de objetos e ferramentas.',
        relatorio: reportId,
      },
    },
    {
      id: '11',
      reportId: reportId,
      form: {
        perigo: 'Falta de identificação dos circuitos',
        localizacao: 'Painel de comando e/ou potência',
        atividade: 'Operação, manutenção',
        consequenciaRisco:
          'Acionamento de circuitos incorretos gerando risco de choque elétrico',
        tipo: 'Elétrico, combinação de perigos',
        arpo: '2',
        arfe: '1,5',
        arglp: '15',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado que os circuitos elétricos não estão identificados no interior do painel, podendo induzir ao erro as atividades de acionamento e/ou desenergização (bloqueio) dos circuitos. Não atende o item 12.3.5(d) da NR-12.',
        recomendacoes:
          'Providenciar identificação adequada dos circuitos no interior do painel em conformidade com as normas técnicas oficiais, ABNT NBR 5410, ABNT NBR IEC 60204-1, e NR-10.',
        relatorio: reportId,
      },
    },
    {
      id: '12',
      reportId: reportId,
      form: {
        perigo: 'Contatos/barramentos expostos',
        localizacao: 'Painel de comando e/ou potência',
        atividade: 'Operação, manutenção',
        consequenciaRisco:
          'Choque elétrico, arco elétrico, incêndio e/ou morte',
        tipo: 'Elétrico, combinação de perigos',
        arpo: '5',
        arfe: '1,5',
        arglp: '15',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado no momento da vistoria a possibilidade de acesso a partes energizadas no interior do painel elétrico, gerando risco de choque elétrico e/ou arco elétrico. Não atende o item 12.3.5(d) e 12.3.8 (c) da NR-12.',
        recomendacoes:
          'Providenciar proteção para os contatos/barramentos expostos em conformidade com as normas técnicas oficiais, ABNT NBR 5410, ABNT NBR IEC 60204-1, e NR-10.',
        relatorio: reportId,
      },
    },
    {
      id: '13',
      reportId: reportId,
      form: {
        perigo: 'Grau de proteção (IP) inadequado',
        localizacao: 'Painel de comando e/ou potência',
        atividade: 'Operação, manutenção',
        consequenciaRisco:
          'Curto-circuito, choque elétrico, arco elétrico, incêndio',
        tipo: 'Elétrico, combinação de perigos',
        arpo: '5',
        arfe: '1,5',
        arglp: '15',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado que o painel encontra-se em local que exige que o invólucro do painel possua grau de proteção (IP) adequado para o ambiente (umidade, poeiras, áreas classificadas). Não atende o item 12.3.5 (e) da NR-12.',
        recomendacoes:
          'Providenciar estudo para determinar o grau de proteção adequado para o ambiente que o painel está instalado, observado sua exposição a umidade, poeiras ou locais com potencial de explosão. Atentar para os requisitos estabelecidos pela ABNT NBR 5410 e ABNT NBR IEC 60079-10.',
        relatorio: reportId,
      },
    },
    {
      id: '14',
      reportId: reportId,
      form: {
        perigo: 'Chave geral como dispositivo de partida e parada',
        localizacao: 'Painel de comando e/ou potência',
        atividade: 'Operação, manutenção',
        consequenciaRisco: 'Arco elétrico e choque elétrico',
        tipo: 'Elétrico, combinação de perigos',
        arpo: '8',
        arfe: '2,5',
        arglp: '15',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado a utilização de chave geral como dispositivo de parada e partida da máquina. Não atende o item 12.3.8 (a) da NR-12.',
        recomendacoes:
          'Instalar, na máquina, sistema de parada e partida independente que esteja em conformidade com as normas técnicas oficiais vigentes.',
        relatorio: reportId,
      },
    },
    {
      id: '15',
      reportId: reportId,
      form: {
        perigo: 'Chave tipo faca em circuitos elétricos',
        localizacao: 'Painel de comando e/ou potência',
        atividade: 'Operação, manutenção',
        consequenciaRisco:
          'Arco elétrico, choque elétrico e ineficiência de proteção',
        tipo: 'Elétrico, combinação de perigos',
        arpo: '15',
        arfe: '2,5',
        arglp: '15',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado a utilização de chave faca nos circuitos elétricos da máquina. Não atende o item 12.3.8 (b) da NR-12',
        recomendacoes:
          'Substituir a chave faca por dispositivos de proteções adequado, conforme normas técnicas oficiais vigentes.',
        relatorio: reportId,
      },
    },
    {
      id: '16',
      reportId: reportId,
      form: {
        perigo: 'Energia residual',
        localizacao: 'Painel de comando e/ou potência',
        atividade: 'Manutenção',
        consequenciaRisco: 'Choque elétrico/morte',
        tipo: 'Elétrico',
        arpo: '5',
        arfe: '2,5',
        arglp: '15',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado a inexistência de chave seccionada geral para aplicar bloqueio de energia conforme solicitação do item 12.11.3 da NR-12.',
        recomendacoes:
          'Providenciar a instalação de seccionadora geral com características que permitam a aplicação do sistema/procedimento LOTO (Lockout/Tagout).',
        relatorio: reportId,
      },
    },
  ];
}
