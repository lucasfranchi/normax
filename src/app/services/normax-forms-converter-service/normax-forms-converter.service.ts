import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChangeExcelFileDTO } from '../change-excel-file/change-excel-file';
import { ChangeExcelFileService } from '../change-excel-file/change-excel-file.service';
import {
  getLinkedForms,
  getReportIdsForms,
} from '../form-organizer/form-organizer';
import { FormOrganizerService } from '../form-organizer/form-organizer.service';

@Injectable({
  providedIn: 'root',
})
export class NormaxFormsConverterService {
  constructor(
    private _changeExcelFileService: ChangeExcelFileService,
    private _http: HttpClient,
    private _formOrganizerService: FormOrganizerService
  ) {}

  public generateReports(formIdsList: Array<String>) {
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
  }
}
