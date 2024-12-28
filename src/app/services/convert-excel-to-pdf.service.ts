import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConvertExcelToPdfService {
  constructor(private _http: HttpClient) {}

  public convertExcelToPdf(buffer: any, fileName: string, file: any) {
    const formData = new FormData();
    const blob = new Blob([buffer], { type: file.files[0].type });
    formData.append('file', blob, fileName);

    this._http
      .post('http://127.0.0.1:5000/convert', formData, {
        responseType: 'blob',
      })
      .subscribe(
        (pdfBlob: Blob) => {
          const url = window.URL.createObjectURL(pdfBlob);
          window.open(url);
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
