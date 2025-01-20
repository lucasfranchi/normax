import {ApreciacaoRiscoPresets} from "../apreciacao-risco";

export function getPresetReport3(reportId: string): ApreciacaoRiscoPresets[] {
  return [
    {
      id: '1',
      reportId: reportId,
      form: {
        perigo: 'Dispositivos de acionamento e parada - Item conforme',
        localizacao: 'Painel da máquina',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Acidente na operação',
        tipo: 'Mecânico, elétrico, combinação de perigos',
        arpo: '0,5',
        arfe: '5',
        arglp: '4',
        arnp: '1',
        erpo: '0,5',
        consideracaoCondAtual: 'Não evidenciado problemas com os Dispositivos de Partida e Parada que possam causar riscos diretos aos profissionais que interagem com a máquina, atendendo os requisitos estabelecidos pelo item 12.4 da NR-12.',
        recomendacoes: 'Manter os comandos sempre identificados e em bom estado de conservação.',
        relatorio: reportId,
      }
    }, {
      id: '2',
      reportId: reportId,
      form: {
        perigo: 'Dispositivo de acionamento dentro de zona perigosa',
        localizacao: 'Zona perigosa da máquina',
        atividade: 'Operação, manutenção',
        consequenciaRisco: 'Acidente na operação',
        tipo: 'Mecânico',
        arpo: '8',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual: 'Evidenciado que os dispositivos de partida, acionamento e parada estão localizados em suas zonas perigosas, não atende o item 12.4.1(a) da NR-12.',
        recomendacoes: 'Adotar o posicionamento dos comandos de acionamento e parada fora da zona de perigo identificada.',
        relatorio: reportId,
      }
    }, {
      id: '3',
      reportId: reportId,
      form: {
        perigo: 'Comando permite acionamento involuntário',
        localizacao: 'Painel da máquina, botão de acionamento',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Acidente na operação',
        tipo: 'Mecânico, elétrico, combinação de perigos',
        arpo: '5',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual: 'Evidenciado que os dispositivos de acionamento e parada não impedem seu acionamento ou desligamento involuntário pelo operador ou por qualquer outra forma acidental, não atende o item 12.4.1(c) da NR-12.',
        recomendacoes: 'Adotar dispositivos de acionamento e parada que impeçam seu acionamento ou desligamento involuntário pelo operador ou por qualquer outra forma acidental.',
        relatorio: reportId,
      }
    }, {
      id: '4',
      reportId: reportId,
      form: {
        perigo: 'O comando de partida ou acionamento permite o funcionamento automatico ao ser energizado',
        localizacao: 'Painel de comando, painel de potência, corpo da máquina, diretamente na tomada',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Acionamento involuntário da máquina',
        tipo: 'Elétricos, mecânicos, combinação de perigos',
        arpo: '5',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual: 'Evidenciado que os comandos de partida ou acionamento das máquinas não possuem dispositivos que impeçam seu funcionamento automático ao serem energizadas, não atende o item 12.4.2 da NR-12',
        recomendacoes: 'Readequar o comando de partida da máquina/equipamento visando instalar dispositivos que impeçam o funcionamento automático da máquina.',
        relatorio: reportId,
      }
    }, {
      id: '5',
      reportId: reportId,
      form: {
        perigo: 'Bimanual sem atuação síncrona',
        localizacao: 'Painel de comando, painel de potência, pedestal da máquina',
        atividade: 'Operação, manutenção e ajustes',
        consequenciaRisco: 'Acionamento da máquina antes do esperado, gerando combinação de riscos',
        tipo: 'Combinação de perigos',
        arpo: '8',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual: 'Evidenciado que o sistema de acionamento da máquina através de botão bimanual não possui atuação síncrona, não atendendo o item 12.4.3(a) da NR-12.',
        recomendacoes: 'Adequar o sistema de comando bimanual para atuação síncrona, garantindo que os botões atuados com retardo de tempo no máximo a 0,5s, atendendo aos requisitos mínimos.',
        relatorio: reportId,
      }
    }, {
      id: '6',
      reportId: reportId,
      form: {
        perigo: 'Bimanual sem monitoramento automático',
        localizacao: 'Painel de comando da máquina, comando da máquina, pedestal da máquina',
        atividade: 'Operação, manutenção e ajustes',
        consequenciaRisco: 'Acionamento da máquina antes do esperado, gerando combinação de riscos',
        tipo: 'Combinação de perigos',
        arpo: '8',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual: 'Não evidenciado no momento da vistoria que o sistema de acionamento bimanual está sendo monitorado através de interface de segurança. Não atende o item 12.4.3(b) da NR-12.',
        recomendacoes: 'Providenciar a instalação de interfaces de segurança (relé ou CLP de segurança), de acordo com a categoria de risco, para monitoriar o acionamento bimanual. O sistema de deverá ser dimensionado por profissional devidamente habilitado com atribuições profissionais compatíveis ao projeto.',
        relatorio: reportId,
      }
    }, {
      id: '7',
      reportId: reportId,
      form: {
        perigo: 'Bimanual sem distância adequada',
        localizacao: 'Painel de comando, painel de potência, painel de comando e potência',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Possibilidade de burla no acionamento ',
        tipo: 'Combinação de perigos',
        arpo: '8',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual: 'Evidenciado que o sistema de acionamento bimanual não possui dispositivo e/ou barreira que impeça a burla do sistema. Não atende o item 12.4.3(f) da NR-12.',
        recomendacoes: 'Providenciar a instalação de dispositivo (barreira) em conformidade com normas técnicas oficiais e ou substituir o sistema bimanual em conformidade com a NR-12.',
        relatorio: reportId,
      }
    }, {
      id: '8',
      reportId: reportId,
      form: {
        perigo: 'Comandos sem sinalização e/ou precárias',
        localizacao: 'Painel de comando e/ou potência',
        atividade: 'Operação, manutenção',
        consequenciaRisco: 'Equivocos na operação e manutenção da máquina',
        tipo: 'Elétrico, combinação de perigos',
        arpo: '2',
        arfe: '5',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual: 'Evidenciado que os comandos não apresentam uma sinalização visível, clara e facilmente identificável, não atende o item 12.4.8(d) da NR-12',
        recomendacoes: 'Adotar nos comandos uma apresentação da seleção visível, clara e facilmente identificável, com legendas apropriadas em língua portuguesa (Brasil).',
        relatorio: reportId,
      }
    }, {
      id: '9',
      reportId: reportId,
      form: {
        perigo: 'Falta de sinalização sonora e ou visual',
        localizacao: 'Toda a máquina e/ou linha',
        atividade: 'Operação, manutenção, ajustes e limpeza',
        consequenciaRisco: 'Combinação de consequências graves',
        tipo: 'Combinação de perigos',
        arpo: '5',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual: 'Não evidenciado sinalização sonora e/ou visual quando a máquina é acionada e ou desligada.Não atende o item 12.4.10  da NR-12.',
        recomendacoes: 'Providenciar a instalação de sinalização sonora e/visual na máquina ou na linha, devendo a sinalização ser acionada sempre que o acionamento de partida e desligamento for acionado.',
        relatorio: reportId,
      }
    }, {
      id: '10',
      reportId: reportId,
      form: {
        perigo: 'Comando com alimentação elétrica acima do nível de tensão de segurança',
        localizacao: 'Painel de comando',
        atividade: 'Operação, manutenção',
        consequenciaRisco: 'Choque elétrico',
        tipo: 'Elétrico, combinação de perigos',
        arpo: '8',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual: 'No momento da vistoria não foi evidenciado que o comando da máquina é alimentado em extrabaixa tensão (tensão de segurança). Não atende o item 12.4.13 da NR-12.',
        recomendacoes: 'Providenciar  a adequação da alimentação do sistema de comando da máquina através de alimentação em extrabaixa tensão (até 25VCA ou 60VCC) em conformidade  com as normas ABNT NBR 5410,  ABNT NBR IEC 60204-1 e NR-10 . O sistema deverá ser projetado por por profissional devidamente habilitado e com atribuições profissionais compativeis. ',
        relatorio: reportId,
      }
    }, {
      id: '11',
      reportId: reportId,
      form: {
        perigo: 'Parada de segurança da máquina',
        localizacao: 'Motor',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Corte, amputação',
        tipo: 'Mecânico, elétrico, combinação de perigos',
        arpo: '5',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual: 'Não evidenciado no circuito elétrico do comando da partida e parada do motor elétrico da máquina, redundância dos dispositivos responsáveis pela prevenção de partida inesperada ou pela função de parada relacionada à segurança, conforme categoria de segurança requerida. O circuito elétrico da chave de partida de motores de máquinas e equipamentos deve:\n' +
          'a) Possuir estrutura redundante;\n' +
          'b) Permitir que as falhas que comprometem a função de segurança sejam monitoradas;\n' +
          'c) Ser adequadamente dimensionado de acordo com o estabelecido pelas normas técnicas nacionais vigentes e, na ausência ou omissão destas, pelas normas técnicas internacionais aplicáveis.\n' +
          'Não atende o item 12.4.14 da NR-12.',
        recomendacoes: 'Adotar redundância dos dispositivos responsáveis pela função de parada relacionada à segurança do circuito elétrico da chave de partida e parada do motor da máquina, conforme categoria segurança.',
        relatorio: reportId,
      }
    },
  ]
}
