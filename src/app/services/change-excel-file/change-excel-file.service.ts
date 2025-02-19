import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as ExcelJS from 'exceljs';
import { getCellChangesByForm } from 'src/app/pages/responder-formulario/forms/apreciacao-risco/apreciacao-risco';
import { getApresentacaoCellChangesByForm } from 'src/app/pages/responder-formulario/forms/apresentacao-maquina/apresentacao-maquina';
import { getCategoriaCellChangesByForm } from 'src/app/pages/responder-formulario/forms/categoria-seguranca/categoria-seguranca';
import { getLimitesCellChangesByForm } from 'src/app/pages/responder-formulario/forms/limites-maquina/limites-maquina';
import { ApreciacaoFormOrganizerService } from '../apreciacao-form-organizer.service/apreciacao-form-organizer.service';
import { ConvertExcelToPdfService } from '../convert-excel-to-pdf.service';
import { FormOrganizerService } from '../form-organizer/form-organizer.service';
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
    private _router: Router,
    private _apreciacaoFormOrganizerService: ApreciacaoFormOrganizerService,
    private _formsOrganizer: FormOrganizerService
  ) {}

  public changeExcelFile(
    changeExcelFileDTO: ChangeExcelFileDTO,
    imageBase64?: string
  ) {
    const reader: FileReader = new FileReader();
    reader.onload = async (e: any) => {
      const buffer = e.target.result;
      const workbook = new ExcelJS.Workbook();
      await workbook.xlsx.load(buffer);
      if (imageBase64) await this._addImageToWorkbook(workbook, imageBase64);
      this._retrieveChanges(changeExcelFileDTO, workbook);
      /*  this._removeUnusedWorkSheets(changeExcelFileDTO, workbook); */

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

      this._router.navigate(['/responder-formulario/forms']);
    };
    reader.readAsArrayBuffer(changeExcelFileDTO.file.files[0]);
  }

  public async changeOrdersAndGenerateReports() {
    const excelFiles = this._reportOrganizer.getReports();

    // Atualiza todos os arquivos Excel primeiro
    for (const file of excelFiles) {
      await this.updateExcelFileOrderAsync(file);
    }

    // Converte os arquivos Excel para PDF
    /* this._convertExcelToPdfService.convertExcelListToPdf(excelFiles); */
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
        worksheet.getCell(cell).value = it.value;
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
    imageBase64: string
  ) {
    try {
      const imageId = workbook.addImage({
        base64: imageBase64,
        extension: 'jpeg',
      });

      const worksheet = workbook.worksheets[0];
      worksheet.addImage(imageId, {
        tl: { col: 1, row: 21 },
        ext: { width: 300, height: 300 },
      });
    } catch (error) {
      console.error('Erro ao adicionar imagem ao workbook:', error);
    }
  }

  public async applyChangesToExcel(file: DataTransfer) {
    const reader: FileReader = new FileReader();
    reader.onload = async (e: any) => {
      const buffer = e.target.result;
      const workbook = new ExcelJS.Workbook();
      await workbook.xlsx.load(buffer);
      const fixedReports = [17, 18, 19, 20];
      const apreciacaoForm =
        this._apreciacaoFormOrganizerService.getApreciacaoFormRisco();

      apreciacaoForm.forEach((it) => {
        Object.keys(it).forEach((key) => {
          const change = getCellChangesByForm(
            it,
            key,
            Number(it.relatorio) - 1
          );
          if (change) {
            const worksheet = workbook.worksheets[change.worksheetIndex];
            change.cell.forEach((cell) => {
              worksheet.getCell(cell).value = change.value;
            });
          }
        });
      });

      Object.keys(
        this._formsOrganizer.getFormValue().apresentacaoMaquina
      ).forEach((it) => {
        const change = getApresentacaoCellChangesByForm(
          this._formsOrganizer.getFormValue().apresentacaoMaquina,
          it,
          18
        );
        if (change) {
          const worksheet = workbook.worksheets[change.worksheetIndex];
          change.cell.forEach((cell) => {
            worksheet.getCell(cell).value = change.value?.toString() == 'true' ? 'X' : change.value;
          });
        }
      });
      Object.keys(
        this._formsOrganizer.getFormValue().categoriaSeguranca
      ).forEach((it) => {
        const change = getCategoriaCellChangesByForm(
          this._formsOrganizer.getFormValue().categoriaSeguranca,
          it,
          19
        );
        if (change) {
          const worksheet = workbook.worksheets[change.worksheetIndex];
          change.cell.forEach((cell) => {
            worksheet.getCell(cell).value = change.value?.toString() == 'true' ? 'X' : change.value;
          });
        }
      });
      Object.keys(this._formsOrganizer.getFormValue().limitesMaquina).forEach(
        (it) => {
          const change = getLimitesCellChangesByForm(
            this._formsOrganizer.getFormValue().limitesMaquina,
            it,
            20
          );
          if (change) {
            const worksheet = workbook.worksheets[change.worksheetIndex];
            change.cell.forEach((cell) => {
              worksheet.getCell(cell).value = change.value?.toString() == 'true' ? 'X' : change.value;
            });
          }
        }
      );

      workbook.worksheets.forEach((it, index) => {
        if (
          !apreciacaoForm
            .map((it) => Number(it.relatorio) - 1)
            .includes(index) &&
          !fixedReports.includes(index)
        ) {
          workbook.removeWorksheetEx(it);
        }
      });

      const newBuffer = await workbook.xlsx.writeBuffer();
      this._convertExcelToPdfService.convertExcelListToPdf(
        new File([newBuffer], `file.xlsx`, {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        })
      );
    };
    reader.readAsArrayBuffer(file.files[0]);
  }
}
