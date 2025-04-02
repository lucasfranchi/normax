import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChangeExcelFileDTO } from '../change-excel-file/change-excel-file';
import { ChangeExcelFileService } from '../change-excel-file/change-excel-file.service';
import {
  getLinkedForms,
  getReportIdsForms,
} from '../normax-form-cache/normax-form-cache';
import { NormaxFormCacheService } from '../normax-form-cache/normax-form-cache.service';
import { NormaxFormEnrichService } from '../normax-form-enrich/normax-form-enrich.service';
import { ReportOrganizerService } from '../report-organizer/report-organizer.service';
import { Router } from '@angular/router';

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
      console.log(updatedForm);

      await Promise.all(
        Object.keys(updatedForm).map(async (it) => {
          return new Promise<void>((resolve) => {
            this._http
              .get('/assets/NR-12/NR-12.xlsx', { responseType: 'blob' })
              .subscribe((data) => {
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
                resolve();
              });
          });
        })
      );

      await this._changeExcelFileService.changeOrdersAndGenerateReports(
        updatedForm.apresentacaoMaquina.maquina,
        formId
      );
    }

    this._router.navigate(['/responder-formulario/forms']);
  }
}
