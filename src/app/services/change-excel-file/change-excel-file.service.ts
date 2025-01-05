import { Injectable } from '@angular/core';
import * as ExcelJS from 'exceljs';
import { ConvertExcelToPdfService } from '../convert-excel-to-pdf.service';
import { ChangeExcelFileDTO } from './change-excel-file';

@Injectable({
  providedIn: 'root',
})
export class ChangeExcelFileService {
  constructor(private _convertExcelToPdfService: ConvertExcelToPdfService) {}

  public changeExcelFile(changeExcelFileDTO: ChangeExcelFileDTO) {
    const reader: FileReader = new FileReader();
    reader.onload = async (e: any) => {
      const buffer = e.target.result;
      const workbook = new ExcelJS.Workbook();
      await workbook.xlsx.load(buffer);
      this._retrieveChanges(changeExcelFileDTO, workbook);
      this._removeUnusedWorkSheets(changeExcelFileDTO, workbook);

      const newBuffer = await workbook.xlsx.writeBuffer();
      this._convertExcelToPdfService.convertExcelToPdf(
        newBuffer,
        'novo_arquivo.xlsx',
        changeExcelFileDTO,
      );
    };
    reader.readAsArrayBuffer(changeExcelFileDTO.file.files[0]);
  }

  private _retrieveChanges(
    changeExcelFileDTO: ChangeExcelFileDTO,
    workbook: ExcelJS.Workbook
  ) {
    changeExcelFileDTO.changesList.forEach((it) => {
      const worksheet = workbook.worksheets[it.worksheetIndex];
      console.log(it)
      worksheet.getCell(it.cell).value = it.value;

      const rows: any = [];
      worksheet.eachRow(
        { includeEmpty: true },
        (
          row: {
            eachCell: (
              arg0: { includeEmpty: boolean },
              arg1: (cell: { value: any }, colIndex: any) => void
            ) => void;
          },
          rowIndex: any
        ) => {
          const rowData: any = [];
          row.eachCell(
            { includeEmpty: true },
            (cell: { value: any }, colIndex: any) => {
              rowData.push(cell.value || '');
            }
          );
          rows.push(rowData);
        }
      );
    });
  }

  private _removeUnusedWorkSheets(
    changeExcelFileDTO: ChangeExcelFileDTO,
    workbook: ExcelJS.Workbook
  ) {
    const worksheetsUpdated = [
      ...new Set(
        changeExcelFileDTO.changesList.map((it) => Number(it.worksheetIndex))
      ),
    ];

    workbook.worksheets.forEach((it, index) => {
      if (!worksheetsUpdated.includes(index)) {
        workbook.removeWorksheetEx(it);
      }
    });
  }
}
