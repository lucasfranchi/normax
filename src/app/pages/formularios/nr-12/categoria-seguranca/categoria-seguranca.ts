import { ChangeExcelFile } from 'src/app/services/change-excel-file/change-excel-file';
import { CategoriaForm } from 'src/app/services/normax-form-cache/normax-form-cache';

export function getCategoriaCellChangesByForm(
  form: CategoriaForm,
  key: string,
  reportId: number
): ChangeExcelFile {
  switch (key) {
    case 'categoriaS':
      return {
        cell: ['K8', 'K14'],
        value: form[key],
        worksheetIndex: reportId,
      };
    case 'categoriaF':
      return {
        cell: ['L8', 'L14'],
        value: form[key],
        worksheetIndex: reportId,
      };
    case 'categoriaP':
      return {
        cell: ['N8', 'N14'],
        value: form[key],
        worksheetIndex: reportId,
      };
  }

  return null;
}
