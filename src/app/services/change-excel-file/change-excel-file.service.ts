import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as ExcelJS from 'exceljs';
import { ImageSelectorInterface } from 'src/app/pages/formularios/nr-12/apreciacao-risco/apreciacao-risco';
import { ConvertExcelToPdfService } from '../convert-excel-to-pdf.service';
import { ReportOrganizerInterface } from '../report-organizer/report-organizer';
import { ReportOrganizerService } from '../report-organizer/report-organizer.service';
import { ChangeExcelFileDTO } from './change-excel-file';

@Injectable({
  providedIn: 'root',
})
export class ChangeExcelFileService {
  constructor(
    private _convertExcelToPdfService: ConvertExcelToPdfService,
    private _reportOrganizer: ReportOrganizerService,
    private _router: Router
  ) { }

  public changeExcelFile(
    changeExcelFileDTO: ChangeExcelFileDTO,
    imageSelector?: ImageSelectorInterface,
    flgReturn: boolean = false
  ) {
    const reader: FileReader = new FileReader();
    reader.onload = async (e: any) => {
      const buffer = e.target.result;
      const workbook = new ExcelJS.Workbook();
      await workbook.xlsx.load(buffer);
      if (imageSelector)
        await this._addImageToWorkbook(workbook, imageSelector);
      this._retrieveChanges(changeExcelFileDTO, workbook);
      this._removeUnusedWorkSheets(changeExcelFileDTO, workbook);

      const newBuffer = await workbook.xlsx.writeBuffer();

      this._reportOrganizer.addReport({
        id: Number(changeExcelFileDTO.reportId),
        file: new File(
          [newBuffer],
          `file_${changeExcelFileDTO.reportId}.xlsx`,
          {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          }
        ),
        identificador: '',
      });

      flgReturn && this._router.navigate(['/responder-formulario/reports']);
    };
    reader.readAsArrayBuffer(changeExcelFileDTO.file.files[0]);
  }

  public async changeOrdersAndGenerateReports(fileName: string, formId: string) {
    const excelFiles = this._reportOrganizer.getReports();

    // Atualiza todos os arquivos Excel primeiro
    for (const file of excelFiles) {
      await this.updateExcelFileOrderAsync(file);
    }

    // Converte os arquivos Excel para PDF
    this._convertExcelToPdfService.convertExcelListToPdf(excelFiles, fileName, formId);
  }

  private updateExcelFileOrderAsync(
    newObject: ReportOrganizerInterface
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        const buffer = event.target?.result as ArrayBuffer;

        const workbook = new ExcelJS.Workbook();
        workbook.xlsx
          .load(buffer)
          .then(() => {
            const sheet = workbook.worksheets[0];

            if (sheet) {
              if (newObject.id < 17)
                sheet.getCell('M1').value = newObject.identificador;

              workbook.xlsx.writeBuffer().then((updatedBuffer) => {
                newObject.file = new File([updatedBuffer], 'report.xlsx', {
                  type: newObject.file.type,
                });
                resolve();
              });
            }
          })
          .catch((error) => {
            console.error('Erro ao carregar o arquivo Excel:', error);
            reject(error);
          });
      };

      reader.readAsArrayBuffer(newObject.file);
    });
  }

  private _retrieveChanges(
    changeExcelFileDTO: ChangeExcelFileDTO,
    workbook: ExcelJS.Workbook
  ) {
    changeExcelFileDTO.changesList.forEach((it) => {
      const worksheet = workbook.worksheets[it.worksheetIndex];
      it.cell.forEach((cell) => {
        worksheet.getCell(cell).value =
          it.value?.toString() == 'true' ? 'X' : it.value;
      });

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

  private async _addImageToWorkbook(
    workbook: ExcelJS.Workbook,
    imageSelector: ImageSelectorInterface
  ) {
    try {
      const imageId = workbook.addImage({
        base64: imageSelector.image,
        extension: 'jpeg',
      });

      const worksheet = workbook.worksheets[imageSelector.isCapaImage ? 18 : 0];
      worksheet.addImage(imageId, {
        tl: { col: imageSelector.isCapaImage ? 1 : 1, row: imageSelector.isCapaImage ? 6 : 21 },
        ext: this._getImageResolution(imageSelector),
      });
    } catch (error) {
      console.error('Erro ao adicionar imagem ao workbook:', error);
    }
  }

  private _getImageResolution(imageSelector: ImageSelectorInterface) {
    const width = imageSelector.resolution.width;
    const height = imageSelector.resolution.height;

    if(imageSelector.resolution.width > 650) {
      imageSelector.resolution.width = imageSelector.resolution.width / 2;
      imageSelector.resolution.height = imageSelector.resolution.height / 2;
      return this._getImageResolution(imageSelector);
    }

    if(imageSelector.resolution.height > (imageSelector.isCapaImage ? 200 : 400)) {
      imageSelector.resolution.width = imageSelector.resolution.width / 2;
      imageSelector.resolution.height = imageSelector.resolution.height / 2;
      return this._getImageResolution(imageSelector);
    }

    return { width, height };
  }
}
