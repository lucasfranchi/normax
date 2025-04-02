import { Injectable } from '@angular/core';
import { NormaxFormCacheService } from '../normax-form-cache/normax-form-cache.service';
import { ReportOrganizerService } from '../report-organizer/report-organizer.service';
import { NormaxStorageService } from '../normax-storage-service/normax-storage.service';

@Injectable({
  providedIn: 'root'
})
export class NormaxFormEnrichService {

  constructor(
    private _normaxStorageService: NormaxStorageService,
    private _formOrganizerService: NormaxFormCacheService,
    private _reportOrganizerService: ReportOrganizerService
  ) { }

  public async getFormAndEnrich(formId: string) {
    await this._normaxStorageService.getForm(formId).then((it) => {
      this._formOrganizerService.setStorageForm({
        id: formId,
        data: it,
      });
      this._reportOrganizerService.setStorageReports(it.reportList);
      this._reportOrganizerService.setRawMedia(it.media);
    });
  }
}
