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

@Injectable({
  providedIn: 'root',
})
export class NormaxFormsOrganizerService {
  constructor(
    private _changeExcelFileService: ChangeExcelFileService,
    private _formOrganizerService: NormaxFormCacheService,
    private _normaxFormEnrichService: NormaxFormEnrichService,
    private _reportOrganizerService: ReportOrganizerService,
    private _http: HttpClient
  ) { }

  public generateReports(formIdsList: Array<string>) {
    formIdsList.forEach(async formId => {
      this._formOrganizerService.clearFormsCache()
      this._reportOrganizerService.getReports()
      this._reportOrganizerService.getMedia()

      await this._normaxFormEnrichService.getFormAndEnrich(formId)

      const updatedForm = this._formOrganizerService.getFormValue();

      Object.keys(updatedForm).forEach((it) => {
        this._http
          .get('/assets/NR-12/NR-12.xlsx', { responseType: 'blob' })
          .subscribe((data) => {
            const file = new File([data], 'NR-12.xlsx', { type: data.type });
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);

            const changeExcelFileDTO: ChangeExcelFileDTO = {
              changesList: getLinkedForms(it, updatedForm),
              file: dataTransfer,
              reportId: getReportIdsForms(it),
            };
            this._changeExcelFileService.changeExcelFile(changeExcelFileDTO);
          });
      });
      setTimeout(() => {
        this._changeExcelFileService.changeOrdersAndGenerateReports(updatedForm.apresentacaoMaquina.maquina);
      }, 3000);
    })

    /* this._router.navigate(['/responder-formulario/forms']); */
  }
}
