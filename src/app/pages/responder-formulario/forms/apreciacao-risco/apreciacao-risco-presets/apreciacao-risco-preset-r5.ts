import { ApreciacaoRiscoPresets } from '../apreciacao-risco';

export function getPresetReport5(reportId: string): ApreciacaoRiscoPresets[] {
  return [
    {
      id: '1',
      reportId: reportId,
      form: {
        perigo: 'Dispositivo de parada de emergência - Item conforme',
        localizacao: 'Máquina',
        atividade: 'Operação, manutenção, ajustes, limpeza',
        consequenciaRisco: 'Acidentes na operação',
        tipo: 'Mecânico, elétrico, combinação de perigos',
        arpo: '0,1',
        arfe: '5',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Não evidenciado problemas com os Dispositivos de Parada de Emergência que possam causar riscos diretos aos profissionais que interagem com a máquina, atendendo os requisitos estabelecidos pelo item 12.6 da NR-12.',
        recomendacoes:
          'Manter os dispositivos de parada de emergência em bom estado de conservação e instalados conforme categoria de segurança.\n' +
          '\n' +
          'Obs.: Os dispositivos de parada de emergência instalados devem atender a categoria de segurança e no mínimo PLr c.',
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
          'A máquina excetua-se da obrigação do dispositivo de parada de emergência, visto que ou a máquina é autopropelida ou o dispositivo não possibilita a redução do risco, conforme o item 12.6.1.2 da NR-12.',
        recomendacoes:
          'Manter os colaboradores treinados e capacitados acerca dos riscos da máquina, de modo que estejam alinhados com procedimentos operacionais e com o conteúdo de capacitação, resguardando sua integridade física.',
        relatorio: reportId,
      },
    },
    {
      id: '3',
      reportId: reportId,
      form: {
        perigo: 'Falta de dispositivo de parada de emergência',
        localizacao:
          'Ao redor da máquina, lado direito da máquina, lado esquerdo da máquina, em frente a máquina, parte traseira da máquina',
        atividade: 'Operação, manutenção, ajustes, limpeza',
        consequenciaRisco: 'Acidentes na operação, choque elétrico, morte',
        tipo: 'Mecânico, elétrico, combinação de perigos',
        arpo: '8',
        arfe: '5',
        arglp: '8',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado que a máquina não está equipada com um ou mais dispositivos de parada de emergência, por meio dos quais possam ser evitadas situações de perigo latentes e existentes, não atende o item 12.6.1 da NR-12.',
        recomendacoes:
          'Adotar dispositivo de parada de emergência, bem posicionado, sinalizado, que possua rearme e seja monitorado por meio de sistemas de segurança, conforme categoria de segurança (e no mínimo PLr c) e que possam ser acionados em situação de perigo.',
        relatorio: reportId,
      },
    },
    {
      id: '4',
      reportId: reportId,
      form: {
        perigo: 'Botão de emergência utilizado para acionamento ou partida',
        localizacao: 'Painel de comando e/ou potência',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Acidentes na operação',
        tipo: 'Mecânico, elétrico, combinação de perigos',
        arpo: '8',
        arfe: '4',
        arglp: '8',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado dispositivo de parada de emergência utilizado como dispositivo de partida ou de acionamento, não atende o item 12.6.1.1 da NR-12.',
        recomendacoes:
          'Providenciar botão adequado para as seleções de maneira que dispositivo de parada de emergência seja utilizado exclusivamente para a função parada de emergência.',
        relatorio: reportId,
      },
    },
    {
      id: '5',
      reportId: reportId,
      form: {
        perigo: 'Obstrução do dispositivo de parada de emergência',
        localizacao:
          'Ao redor da máquina, lado direito da máquina, lado esquerdo da máquina, em frente a máquina, parte traseira da máquina',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Acidentes na operação',
        tipo: 'Mecânico, elétrico, combinação de perigos',
        arpo: '8',
        arfe: '4',
        arglp: '8',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado que o dispositivo de parada de emergência possui um anteparo que, em uma possível situação emergência, pode dificultar o seu acionamento, não atende ao item 12.6.3(c) da NR-12.',
        recomendacoes:
          'Providenciar a remoção do anteparo do dispositivo de parada de emergência dos painéis para que possa ser acionado sem qualquer dificuldade em caso de emergência, permitindo a atuação com a palma da mão de qualquer posição previsível do operador ou outros que precisem acioná-lo.',
        relatorio: reportId,
      },
    },
    {
      id: '6',
      reportId: reportId,
      form: {
        perigo:
          'Dispositivo de parada de emergência obsoleto - sem retenção do atuador',
        localizacao: 'Painel de comando e/ou potência',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Acidentes na operação',
        tipo: 'Mecânico, elétrico, combinação de perigos',
        arpo: '8',
        arfe: '4',
        arglp: '8',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado que o acionamento do dispositivo de parada não resulta na retenção do atuador, de tal forma que, quando a ação no atuador for descontinuada, este se mantenha retido até que seja desarmado, não atende o item 12.6.5 da NR-12.',
        recomendacoes:
          'Adotar dispositivo de parada de emergência, conforme categoria de segurança, sinalizado, que possua rearme e seja monitorado por meio de sistemas de segurança, que possam ser acionados em situação de perigo.',
        relatorio: reportId,
      },
    },
    {
      id: '7',
      reportId: reportId,
      form: {
        perigo: 'Cabo de emergência trabalhando não tracionado',
        localizacao:
          'Ao redor da máquina, lado direito da máquina, lado esquerdo da máquina, em frente a máquina, parte traseira da máquina',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Acidentes na operação',
        tipo: 'Mecânico, elétrico, combinação de perigos',
        arpo: '8',
        arfe: '4',
        arglp: '8',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado que o dispositivo de parada de emergência tipo cabo não trabalha tracionado de modo a cessar automaticamente as funções perigosas da máquina em caso de ruptura ou afrouxamento dos cabos, não atende ao item 12.6.6(a) da NR-12.',
        recomendacoes:
          'Adotar dispositivo de parada de emergência que trabalhe tracionado e atenda categoria de segurança de maneira que possa ser acionado sem qualquer dificuldade em caso de emergência, permitindo a atuação de qualquer posição do operador ou outros que precisem acioná-lo.\n' +
          'Obs.: Os dispositivos de parada de emergência instalados devem atender a categoria de segurança.',
        relatorio: reportId,
      },
    },
    {
      id: '8',
      reportId: reportId,
      form: {
        perigo: 'Chave no dispositivo | elemento cortante',
        localizacao: 'Dispositivo de parada de emergência',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Corte',
        tipo: 'Mecânico',
        arpo: '8',
        arfe: '4',
        arglp: '0,5',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Evidenciado que o dispositivo de parada de emergência necessita de chave para desbloqueio e que a chave encontra-se no dispositivo.',
        recomendacoes:
          'Recomenda-se que os dispositivos de parada de emergência da máquina que necessitem de chave para desbloqueio permaneçam com chave no dispositivo somente durante o destravamento, evitando ferimentos nas mãos.',
        relatorio: reportId,
      },
    },
  ];
}
