import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    private _normaxStorageService: NormaxStorageService
  ) { }

  public async convertExcelListToPdf(excelList: ReportOrganizerInterface[], fileName: string, formId: string) {
    var convertedPdfList: { index: number; pdf: Blob }[] = [];
    console.log(excelList)
    excelList.sort((a, b) => a.id - b.id);

    for (let index = 0; index < excelList.length; index++) {
      const excelObject = excelList[index];
      const reader = new FileReader();

      // Função para ler o arquivo como ArrayBuffer
      const readFile = new Promise<ArrayBuffer>((resolve, reject) => {
        reader.onload = (event) => {
          if (event.target?.result) {
            resolve(event.target.result as ArrayBuffer);
          } else {
            reject(new Error("Erro ao ler o arquivo"));
          }
        };
        reader.readAsArrayBuffer(excelObject.file);
      });

      try {
        const buffer = await readFile;
        const formData = new FormData();
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        formData.append('inputFile', blob, `file_${index}.xlsx`);

        // Chamando a API com retry
        const pdfBlob = await this.retryHttpRequestNative(formData, 10); // Tenta até 5 vezes antes de desistir
        console.log(`Arquivo ${index} convertido com sucesso!`);
        convertedPdfList.push({ index, pdf: pdfBlob });

      } catch (error) {
        console.error(`Erro na conversão do arquivo ${index}:`, error);
      }
    }

    // Ordena e junta os PDFs depois que todas as conversões forem feitas
    if (convertedPdfList.length === excelList.length) {
      convertedPdfList.sort((a, b) => a.index - b.index);
      const pdfs = convertedPdfList.map((item) => item.pdf);
      this.mergePdfs(pdfs, fileName, formId);
      convertedPdfList = [];
    }
  }

  private async retryHttpRequestNative(formData: FormData, maxAttempts: number): Promise<Blob> {
    let attempt = 0;

    while (attempt < maxAttempts) {
      try {
        const headers = new HttpHeaders({
          'Apikey': '4191c49c-f543-4959-907b-282d161b1563'
          // O Content-Type é automaticamente definido quando usamos FormData
        });

        const response = await this._http.post('https://api.cloudmersive.com/convert/xlsx/to/pdf', formData, {
          headers,
          responseType: 'blob'
        }).toPromise();

        return response as Blob;

      } catch (error) {
        attempt++;
        console.warn(`Erro (tentativa ${attempt}):`, error);
        await new Promise(res => setTimeout(res, 2000 * attempt));
      }
    }

    throw new Error("Não foi possível converter após várias tentativas.");
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
    const copiedExistingPages = await mergedPdf.copyPages(existingPdf, existingPdf.getPageIndices());
    copiedExistingPages.forEach((page) => {
      mergedPdf.addPage(page);
    });

    // Dividir a lista de PDFs em duas partes: últimos 4 e o restante
    const lastFourPdfs = pdfList.slice(-4); // Pega os 4 últimos
    const remainingPdfs = pdfList.slice(0, -4); // Pega o restante

    // Adicionar os 4 últimos PDFs primeiro
    for (const pdfBlob of lastFourPdfs) {
      const pdfBytes = await pdfBlob.arrayBuffer();
      const pdf = await PDFDocument.load(pdfBytes);
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach((page) => {
        mergedPdf.addPage(page);
      });
    }

    // Em seguida, adicionar o restante dos PDFs
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
    const mergedPdfBlob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
    await this.savePdfLocally(
      mergedPdfBlob,
      `${fileName}.pdf`
    );

    this._normaxStorageService.deleteForm(formId);

    window.location.href = '/tabs/tab2';
  }

  private async loadDefaultPdfFromAssets(): Promise<Uint8Array> {
    const response = await fetch('/assets/default.pdf');
    const pdfArrayBuffer = await response.arrayBuffer();
    return new Uint8Array(pdfArrayBuffer);
  }
}
