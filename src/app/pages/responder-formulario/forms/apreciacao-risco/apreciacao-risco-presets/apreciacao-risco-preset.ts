import { ApreciacaoRiscoPresets } from '../apreciacao-risco';
import { getPresetReport1 } from './apreciacao-risco-preset-r1';
import { getPresetReport10 } from './apreciacao-risco-preset-r10';
import { getPresetReport11 } from './apreciacao-risco-preset-r11';
import { getPresetReport12 } from './apreciacao-risco-preset-r12';
import { getPresetReport13 } from './apreciacao-risco-preset-r13';
import { getPresetReport14 } from './apreciacao-risco-preset-r14';
import { getPresetReport15 } from './apreciacao-risco-preset-r15';
import { getPresetReport16 } from './apreciacao-risco-preset-r16';
import { getPresetReport17 } from './apreciacao-risco-preset-r17';
import { getPresetReport2 } from './apreciacao-risco-preset-r2';
import { getPresetReport3 } from './apreciacao-risco-preset-r3';
import { getPresetReport4 } from './apreciacao-risco-preset-r4';
import { getPresetReport5 } from './apreciacao-risco-preset-r5';
import { getPresetReport6 } from './apreciacao-risco-preset-r6';
import { getPresetReport7 } from './apreciacao-risco-preset-r7';
import { getPresetReport8 } from './apreciacao-risco-preset-r8';
import { getPresetReport9 } from './apreciacao-risco-preset-r9';

export function getPreset(reportId: string): ApreciacaoRiscoPresets[] {
  switch (reportId) {
    case '1':
      return getPresetReport1(reportId);

    case '2':
      return getPresetReport2(reportId);

    case '3':
      return getPresetReport3(reportId);

    case '4':
      return getPresetReport4(reportId);

    case '5':
      return getPresetReport5(reportId);

    case '6':
      return getPresetReport6(reportId);

    case '7':
      return getPresetReport7(reportId);

    case '8':
      return getPresetReport8(reportId);

    case '9':
      return getPresetReport9(reportId);

    case '10':
      return getPresetReport10(reportId);

    case '11':
      return getPresetReport11(reportId);

    case '12':
      return getPresetReport12(reportId);

    case '13':
      return getPresetReport13(reportId);

    case '14':
      return getPresetReport14(reportId);

    case '15':
      return getPresetReport15(reportId);

    case '16':
      return getPresetReport16(reportId);

    case '17':
      return getPresetReport17(reportId);
  }

  return [];
}
