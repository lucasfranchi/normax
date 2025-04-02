import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import { saveAs } from 'file-saver';
import { PDFDocument } from 'pdf-lib';
import { NormaxStorageService } from './normax-storage-service/normax-storage.service';
import { ReportOrganizerInterface } from './report-organizer/report-organizer';

@Injectable({
  providedIn: 'root',
})
export class ConvertExcelToPdfService {
  constructor(
    private _http: HttpClient,
    private _normaxStorageService: NormaxStorageService,
  ) { }

  public convertExcelListToPdf(excelList: ReportOrganizerInterface[], fileName: string, formId: string) {
    const convertedPdfList: { index: number; pdf: Blob }[] = [];
    excelList.sort((a, b) => a.id - b.id);

    let index = 0;

    const interval = setInterval(() => {
      if (index >= excelList.length) {
        clearInterval(interval); // Para a execução quando terminar a lista
        return;
      }

      const excelObject = excelList[index];
      const reader = new FileReader();

      reader.onload = async (event) => {
        const buffer = event.target?.result as ArrayBuffer;
        const formData = new FormData();
        const blob = new Blob([buffer], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        formData.append('inputFile', blob, `file_${index}.xlsx`);

        this._http.post('https://api.cloudmersive.com/convert/xlsx/to/pdf', formData, {
          responseType: 'blob',
          headers: {
            "Apikey": "4191c49c-f543-4959-907b-282d161b1563"
          }
        }).subscribe(
          (pdfBlob: Blob) => {
            convertedPdfList.push({ index, pdf: pdfBlob });
            if (convertedPdfList.length === excelList.length) {
              convertedPdfList.sort((a, b) => a.index - b.index);
              const pdfs = convertedPdfList.map((item) => item.pdf);
              this.mergePdfs(pdfs, fileName, formId);
            }
          },
          (error) => {
            console.error('Erro ao converter o arquivo:', error);
            window.location.href = '/responder-formulario/forms-list';
          }
        );
      };

      reader.readAsArrayBuffer(excelObject.file);
      index++; // Avança no array para a próxima requisição
    }, 1000); // Chama a cada 1 segundo
  }

  private async savePdfLocally(pdfBlob: Blob, fileName: string) {
    const pdfArrayBuffer = await pdfBlob.arrayBuffer();
    const base64Data = this.arrayBufferToBase64(pdfArrayBuffer);

    await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    });

    saveAs(new Blob([pdfArrayBuffer], { type: 'application/pdf' }), fileName);
  }

  private arrayBufferToBase64(buffer: ArrayBuffer): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  private async mergePdfs(pdfList: Blob[], fileName: string, formId: string) {
    const mergedPdf = await PDFDocument.create();

    // Carregar e adicionar o PDF existente da pasta assets primeiro
    const existingPdfBytes = await this.loadDefaultPdfFromAssets();
    const existingPdf = await PDFDocument.load(existingPdfBytes);
    const copiedExistingPages = await mergedPdf.copyPages(
      existingPdf,
      existingPdf.getPageIndices()
    );
    copiedExistingPages.forEach((page) => {
      mergedPdf.addPage(page);
    });

    // Pegar os últimos 4 PDFs da lista e adicioná-los ao PDF mesclado
    const lastFourPdfs = pdfList.slice(-4);
    for (const pdfBlob of lastFourPdfs) {
      const pdfBytes = await pdfBlob.arrayBuffer();
      const pdf = await PDFDocument.load(pdfBytes);
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach((page) => {
        mergedPdf.addPage(page);
      });
    }

    // Adicionar o restante dos PDFs da lista
    const remainingPdfs = pdfList.slice(0, -4);
    for (const pdfBlob of remainingPdfs) {
      const pdfBytes = await pdfBlob.arrayBuffer();
      const pdf = await PDFDocument.load(pdfBytes);
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach((page) => {
        mergedPdf.addPage(page);
      });
    }

    // Salvar o PDF mesclado final
    const mergedPdfBytes = await mergedPdf.save();
    const mergedPdfBlob = new Blob([mergedPdfBytes], {
      type: 'application/pdf',
    });

    await this.savePdfLocally(
      mergedPdfBlob,
      `${fileName}.pdf`
    );

    /* this._normaxStorageService.deleteForm(formId); */

    // Navegar para a página de relatórios salvos
     window.location.href = '/tabs/tab2';
  }

  private async loadDefaultPdfFromAssets(): Promise<Uint8Array> {
    const response = await fetch('/assets/default.pdf');
    const pdfArrayBuffer = await response.arrayBuffer();
    return new Uint8Array(pdfArrayBuffer);
  }
}
