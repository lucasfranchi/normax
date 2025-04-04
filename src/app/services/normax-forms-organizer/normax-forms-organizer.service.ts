import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeExcelFileDTO } from '../change-excel-file/change-excel-file';
import { ChangeExcelFileService } from '../change-excel-file/change-excel-file.service';
import {
  getLinkedForms,
  getReportIdsForms,
} from '../normax-form-cache/normax-form-cache';
import { NormaxFormCacheService } from '../normax-form-cache/normax-form-cache.service';
import { NormaxFormEnrichService } from '../normax-form-enrich/normax-form-enrich.service';
import { ReportOrganizerService } from '../report-organizer/report-organizer.service';

@Injectable({
  providedIn: 'root',
})
export class NormaxFormsOrganizerService {
  constructor(
    private _changeExcelFileService: ChangeExcelFileService,
    private _formOrganizerService: NormaxFormCacheService,
    private _normaxFormEnrichService: NormaxFormEnrichService,
    private _reportOrganizerService: ReportOrganizerService,
    private _http: HttpClient,
    private _router: Router,
  ) { }

  public async generateReports(formIdsList: Array<string>) {
    for (const formId of formIdsList) {
      this._formOrganizerService.clearFormsCache();
      this._reportOrganizerService.getReports();
      this._reportOrganizerService.getMedia();

      await this._normaxFormEnrichService.getFormAndEnrich(formId);
      const updatedForm = this._formOrganizerService.getFormValue();

      // Criando um array de promessas para aguardar a execução correta
      const changeFilePromises = Object.keys(updatedForm).map((it) => {
        return this.changeExcelFileWithPromise(it, updatedForm);
      });

      await Promise.all(changeFilePromises);

      await this._changeExcelFileService.changeOrdersAndGenerateReports(
        updatedForm.apresentacaoMaquina.maquina,
        formId
      );
    }
  }

  // Função que retorna uma Promise e aguarda a execução de changeExcelFile()
  private changeExcelFileWithPromise(it: string, updatedForm: any): Promise<void> {
    return new Promise((resolve, reject) => {
      this._http.get('/assets/NR-12/NR-12.xlsx', { responseType: 'blob' }).subscribe((data) => {
        const file = new File([data], 'NR-12.xlsx', { type: data.type });
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);

        const imageSelector = getReportIdsForms(it) == '18' ? updatedForm.capa.imageSelector : null;
        const changeExcelFileDTO: ChangeExcelFileDTO = {
          changesList: getLinkedForms(it, updatedForm),
          file: dataTransfer,
          reportId: getReportIdsForms(it),
        };

        this._changeExcelFileService.changeExcelFile(changeExcelFileDTO, imageSelector);

        // Apenas resolve a promessa após execução completa de changeExcelFile()
        setTimeout(() => resolve(), 3000);
      }, (error) => reject(error));
    });
  }
}
