import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ReportOrganizerInterface} from "./report-organizer/report-organizer";
import {ReportOrganizerService} from "./report-organizer/report-organizer.service";
import {ChangeExcelFileDTO} from "./change-excel-file/change-excel-file";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class ConvertExcelToPdfService {
  constructor(
    private _http: HttpClient,
    private reportOrganizerService: ReportOrganizerService,
    private _router: Router
  ) {}

  public convertExcelToPdf(buffer: any, fileName: string, changeExcelFileDTO: ChangeExcelFileDTO) {
    const formData = new FormData();
    const blob = new Blob([buffer], {type: changeExcelFileDTO.file.files[0].type});
    formData.append('file', blob, fileName);

    this._http
      .post('http://192.168.1.29:5000/convert', formData, {
        responseType: 'blob',
      })
      .subscribe(
        (pdfBlob: Blob) => {
          const reportOrganizer: ReportOrganizerInterface = {
            file: new File([pdfBlob], 'merged.pdf', { type: 'application/pdf' }),
            id: Number(changeExcelFileDTO.reportId)
          }

          this.reportOrganizerService.addReport(reportOrganizer);
          this._router.navigate(['/responder-formulario/forms'], {
            queryParams: {
              id: changeExcelFileDTO.reportId
            }
          })
          /*const url = window.URL.createObjectURL(pdfBlob);
          window.open(url);*/
          /* const a = document.createElement('a');
          a.href = url;
          a.download = `${fileName}.pdf`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a); */
        },
        (error) => {
          console.error('Erro ao converter o arquivo:', error);
        }
      );
  }
}
