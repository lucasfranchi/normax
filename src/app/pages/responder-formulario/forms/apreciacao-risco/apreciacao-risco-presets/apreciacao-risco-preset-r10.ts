import { ApreciacaoRiscoPresets } from '../apreciacao-risco';

export function getPresetReport10(reportId: string): ApreciacaoRiscoPresets[] {
  return [
    {
      id: '1',
      reportId: reportId,
      form: {
        perigo: 'Organização da manutenção - Item conforme',
        localizacao: 'Em toda máquina',
        atividade: 'Operação, manutenção, ajustes e limpeza',
        consequenciaRisco:
          'Acidentes gerais, doenças ocupacionais, cortes, fraturas, luxações',
        tipo: 'Mecânico, elétrico',
        arpo: '0,1',
        arfe: '1,5',
        arglp: '8',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'De acordo com as informações concedidas, a empresa possui plano de manutenção com registros em sistema informatizado XXXX, local onde as atividades são registradas.\n' +
          '\n' +
          'O registro das manutenções deve ficar disponível aos trabalhadores envolvidos na operação, manutenção e reparos, bem como à Comissão Interna de Prevenção de Acidentes - CIPA, ao Serviço de Segurança e Medicina do Trabalho - SESMT e à Auditoria Fiscal do Trabalho.',
        recomendacoes:
          'Manter atualizado o plano de manutenção e sempre orientar os funcionários sobre as boas práticas de manutenção.',
        relatorio: reportId,
      },
    },
    {
      id: '2',
      reportId: reportId,
      form: {
        perigo: 'Organização da manutenção - Item conforme',
        localizacao: 'Em toda máquina',
        atividade: 'Operação, manutenção, ajustes e limpeza',
        consequenciaRisco:
          'Acidentes gerais, doenças ocupacionais, cortes, fraturas, luxações',
        tipo: 'Mecânico, elétrico',
        arpo: '0,1',
        arfe: '1,5',
        arglp: '8',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado que a empresa possui plano de manutenção com registros em sistema informatizado XXXXXX, onde as atividades são registradas através de ordens de serviço e cronogramas. \n' +
          'O registro das manutenções deve ficar disponível aos trabalhadores envolvidos na operação, manutenção e reparos, bem como à Comissão Interna de Prevenção de Acidentes e de Assédio - CIPA, ao Serviço de Segurança e Medicina do Trabalho - SESMT e à Auditoria Fiscal do Trabalho. \n' +
          'Deve conter, no mínimo, os seguintes dados:\n' +
          'a) intervenções realizadas; \n' +
          'b) data de realização; \n' +
          'c) serviço realizado; \n' +
          'd) peças reparadas ou substituídas; \n' +
          'e) condições de segurança do equipamento;\n' +
          'f) indicações conclusivas quanto às condições de segurança da máquina; e \n' +
          'g) nome do responsável pela execução das intervenções.',
        recomendacoes:
          'Manter atualizado o plano de manutenção e sempre orientar os funcionários sobre as boas práticas de manutenção.',
        relatorio: reportId,
      },
    },
    {
      id: '3',
      reportId: reportId,
      form: {
        perigo: 'Falta de plano de manutenção',
        localizacao: 'Em toda máquina',
        atividade: 'Manutenção, ajustes, inspeção',
        consequenciaRisco:
          'Acidentes gerais, doenças ocupacionais, cortes, fraturas, luxações',
        tipo: 'Mecânico, elétrico',
        arpo: '5',
        arfe: '1,5',
        arglp: '8',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Não evidenciado que a máquina ou equipamento possua plano de manutenção, não atende aos itens 12.11.1 da NR-12 .',
        recomendacoes:
          'Adotar plano de manutenção na forma e periodicidade determinada pelo fabricante ou por profissional legalmente habilitado ou por profissional capacitado, conforme normas técnicas oficiais aplicáveis. Nas manutenções devem ser registradas, no mínimo, os seguintes dados: \n' +
          'a) intervenções realizadas; \n' +
          'b) data de realização; \n' +
          'c) serviço realizado; \n' +
          'd) peças reparadas ou substituídas; \n' +
          'e) condições de segurança do equipamento;\n' +
          'f) indicações conclusivas quanto às condições de segurança da máquina; e \n' +
          'g) nome do responsável pela execução das intervenções.',
        relatorio: reportId,
      },
    },
    {
      id: '4',
      reportId: reportId,
      form: {
        perigo: 'Falta de bloqueio mecânico e/ou elétrico / Energia residual',
        localizacao: 'Dispositivos de seccionamento',
        atividade: 'Manutenção, ajustes, inspeção',
        consequenciaRisco: 'Acidentes gerais, choque elétrico, esmagamento',
        tipo: 'Mecânico, elétrico',
        arpo: '8',
        arfe: '1,5',
        arglp: '8',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          "Não evidenciado que seja adotado o procedimento de bloqueio mecânico e/ou elétrico na posição 'fechado' ou 'desligado' de todos os dispositivos de corte de fontes de energia da máquina, não atende os itens 12.11.3(b) e 12.11.3(a) da NR-12.",
        recomendacoes:
          'Adotar dispositivos de bloqueio mecânico e elétrico e de corte de todas as fontes de energia da máquina a fim de impedir a reenergização. Adotar sinalização com cartão ou etiqueta de bloqueio contendo o horário e a data do bloqueio, o motivo da manutenção e o nome do responsável (LOTO). Também garantir que à jusante dos pontos de corte não exista a possibilidade de gerar riscos de acidentes.',
        relatorio: reportId,
      },
    },
    {
      id: '5',
      reportId: reportId,
      form: {
        perigo:
          'Falta de medidas adicionais de segurança em sistema sustentados somente por hidráulico ou pneumático / Energia residual',
        localizacao:
          'Ao redor da máquina, lado direito da máquina, lado esquerdo da máquina, em frente a máquina, parte traseira da máquina',
        atividade: 'Manutenção, ajustes, inspeção',
        consequenciaRisco: 'Acidentes gerais, esmagamento, impacto, amputação',
        tipo: 'Mecânico',
        arpo: '8',
        arfe: '1,5',
        arglp: '8',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Não evidenciado que sejam utilizadas medidas adicionais de segurança nas manutenções, inspeções e reparos nas máquinas e equipamentos sustentados somente por sistemas hidráulicos ou pneumáticos, não atende o item  12.11.3(d) da NR-12.',
        recomendacoes:
          'Adotar medidas adicionais de segurança na realização das manutenções, inspeções e reparos das máquinas e equipamentos sustentados somente por sistemas hidráulicos ou pneumáticos.',
        relatorio: reportId,
      },
    },
    {
      id: '6',
      reportId: reportId,
      form: {
        perigo:
          'Falta de sistema de retenção com trava mecânica / Energia residual',
        localizacao:
          'Ao redor da máquina, lado direito da máquina, lado esquerdo da máquina, em frente a máquina, parte traseira da máquina',
        atividade: 'Manutenção, ajustes, inspeção',
        consequenciaRisco: 'Acidentes gerais, esmagamento, impacto, amputação',
        tipo: 'Mecânico',
        arpo: '8',
        arfe: '1,5',
        arglp: '8',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Não evidenciado sistema de retenção com trava mecânica para evitar o retorno acidental de partes basculadas e/ou articuladas, não atende o item 12.11.3(e) da NR-12.',
        recomendacoes:
          'Adotar sistema de retenção com trava mecânica para evitar o retorno acidental de partes basculadas e/ou articuladas.',
        relatorio: reportId,
      },
    },
  ];
}
