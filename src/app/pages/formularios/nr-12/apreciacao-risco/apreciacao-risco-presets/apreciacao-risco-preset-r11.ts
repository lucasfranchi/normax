import { ApreciacaoRiscoPresets } from '../apreciacao-risco';

export function getPresetReport11(reportId: string): ApreciacaoRiscoPresets[] {
  return [
    {
      id: '1',
      reportId: reportId,
      form: {
        perigo: 'Sinalização de segurança - Item conforme',
        localizacao: 'Perímetro da máquina',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Ações indevidas que podem levar ao acidente',
        tipo: 'Combinações de riscos',
        arpo: '0,1',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,1',
        consideracaoCondAtual:
          'Não evidenciados problemas com as Sinalizações de Segurança, que possam causar riscos direto aos profissionais que interagem com a máquina, atendendo os requisitos estabelecidos pelo item 12.12 da NR-12.',
        recomendacoes:
          'Manter a sinalização de segurança visível e bem localizada de maneira a advertir os trabalhadores e terceiros sobre os riscos a que estão expostos.',
        relatorio: reportId,
      },
    },
    {
      id: '2',
      reportId: reportId,
      form: {
        perigo: 'Falta de sinalização de segurança',
        localizacao: 'Zonas de perigo na máquina',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Ações indevidas que podem levar ao acidente',
        tipo: 'Combinações de riscos',
        arpo: '5',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,5',
        consideracaoCondAtual:
          'Não evidenciada sinalização de segurança para advertir os trabalhadores e terceiros sobre os riscos a que estão expostos, as instruções de operação e manutenção e outras informações necessárias para garantir a integridade física e a saúde dos trabalhadores, não atende o item 12.12.1 da NR-12.',
        recomendacoes:
          'Adotar sinalização de segurança para advertir os trabalhadores e terceiros sobre os riscos a que estão expostos. A sinalização deve ficar destacada na máquina em localização visível, ser legível e escrita na língua portuguesa. As inscrições devem indicar claramente o risco e a parte da máquina a que se referem.',
        relatorio: reportId,
      },
    },
    {
      id: '3',
      reportId: reportId,
      form: {
        perigo: 'Sinalização de segurança insuficiente e/ou inadequada',
        localizacao: 'Zonas de perigo na máquina',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Ações indevidas que podem levar ao acidente',
        tipo: 'Combinações de riscos',
        arpo: '5',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,5',
        consideracaoCondAtual:
          'Não evidenciado que a sinalização de segurança para advertir os trabalhadores e terceiros sobre os riscos a que estão expostos, as instruções de operação e manutenção apresentam claramente o risco associado, não atende o item 12.12.1 e 12.12.4.1 da NR-12.',
        recomendacoes:
          'Complementar a sinalização de segurança para advertir os trabalhadores e terceiros sobre os riscos a que estão expostos. A sinalização deve ficar destacada na máquina em localização visível, ser legível e escrita na língua portuguesa. As inscrições devem indicar claramente o risco e a parte da máquina a que se referem.',
        relatorio: reportId,
      },
    },
    {
      id: '4',
      reportId: reportId,
      form: {
        perigo: 'Inscrições/informações em língua estrangeira',
        localizacao:
          'Ao redor da máquina, lado direito da máquina, lado esquerdo da máquina, em frente a máquina, parte traseira da máquina',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Interpretações equivocadas',
        tipo: 'Combinações de riscos',
        arpo: '2',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,5',
        consideracaoCondAtual:
          'Evidenciada inscrição/informação escrita em língua estrangeira de maneira que podem levar a interpretações errôneas, não atende o item 12.12.4(a) da NR-12.',
        recomendacoes:
          'Providenciar para que as inscrições/informações da máquina estejam escritas em língua portuguesa (Brasil).',
        relatorio: reportId,
      },
    },
    {
      id: '5',
      reportId: reportId,
      form: {
        perigo: 'Inscrições ilegíveis',
        localizacao:
          'Ao redor da máquina, lado direito da máquina, lado esquerdo da máquina, em frente a máquina, parte traseira da máquina',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco: 'Ações indevidas que podem levar ao acidente',
        tipo: 'Combinações de riscos',
        arpo: '2',
        arfe: '4',
        arglp: '4',
        arnp: '1',
        erpo: '0,5',
        consideracaoCondAtual:
          'Não evidenciada que a inscrição esteja escrita de forma legível de maneira que podem levar a interpretações errôneas, não atende o item 12.12.4(b) da NR-12.',
        recomendacoes: 'Providenciar para que as inscrições sejam legíveis.',
        relatorio: reportId,
      },
    },
    {
      id: '6',
      reportId: reportId,
      form: {
        perigo: 'Falta de identificação nominal da máquina (plaqueta)',
        localizacao: 'Perímetro da máquina',
        atividade: 'Operação, manutenção, ajustes',
        consequenciaRisco:
          'Extrapolar as condições nominais da máquina e gerar acidentes',
        tipo: 'Combinações de riscos',
        arpo: '8',
        arfe: '1,5',
        arglp: '4',
        arnp: '1',
        erpo: '0,5',
        consideracaoCondAtual:
          'Evidenciado que a máquina não possui todas as informações mínimas exigidas em local visível, não atendendo ao item 12.12.7 da NR-12.',
        recomendacoes:
          'Adequar plaqueta de identificação indelével para que contenha, no mínimo, as seguintes informações:\n' +
          'a) Razão social, CNPJ e endereço do fabricante ou importador;\n' +
          'b) Informação sobre tipo, modelo e capacidade;\n' +
          'c) Número de série ou identificação, e ano de fabricação;\n' +
          'd) Número de registro do fabricante/importador ou do profissional legalmente habilitado no CREA; e\n' +
          'e) Peso da máquina ou equipamento.\n' +
          '\n' +
          'Se máquina/equipamento fabricado antes de 24 de dezembro de 2011 conter, no mínimo:\n' +
          'a) informação sobre tipo, modelo e capacidade; \n' +
          'b) número de série ou, quando inexistente, identificação atribuída pela empresa.',
        relatorio: reportId,
      },
    },
  ];
}
