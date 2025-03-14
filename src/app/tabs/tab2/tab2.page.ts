import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FileOpener } from '@capacitor-community/file-opener';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { IonList } from '@ionic/angular/standalone';
import { NormaxPageComponent } from '../../components/normax-page/normax-page.component';
import { NormaxReportCardComponent } from '../../components/normax-report-card/normax-report-card.component';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonList,
    NormaxReportCardComponent,
    NormaxPageComponent,
  ],
})
export class Tab2Page implements OnInit {
  pdfFiles: { name: string; date: string; creationDate: Date | null }[] = [];

  ngOnInit() {
    this.loadSavedReports();
  }

  private async loadSavedReports() {
    const result = await Filesystem.readdir({
      path: '',
      directory: Directory.Documents,
    });

    for (const file of result.files) {
      if (file.name && file.name.toLowerCase().endsWith('.pdf')) {
        try {
          const stat = await Filesystem.stat({
            path: file.name,
            directory: Directory.Documents,
          });

          const creationDate = new Date(stat.ctime);
          this.pdfFiles.push({
            name: file.name,
            date: creationDate.toLocaleDateString(),
            creationDate: creationDate,
          });
        } catch (err) {
          console.error('Erro ao obter a data de criação do arquivo:', err);
        }
      }
    }

    this.pdfFiles.sort((a, b) => {
      if (a.creationDate && b.creationDate) {
        return b.creationDate.getTime() - a.creationDate.getTime();
      } else {
        return 0;
      }
    });
  }

  public async openPdf(fileName: string) {
    const directory = Directory.Documents;

    const fileUri = await Filesystem.getUri({
      directory,
      path: fileName,
    });

    await FileOpener.open({
      filePath: fileUri.uri,
      contentType: 'application/pdf',
    }).catch((err) => {
      console.error('Erro ao abrir o PDF:', err);
    });
  }

  public async deletePdf(fileName: string) {
    const directory = Directory.Documents;

    try {
      await Filesystem.deleteFile({
        directory,
        path: fileName,
      });

      this.pdfFiles = this.pdfFiles.filter((file) => file.name !== fileName);
      console.log(`Arquivo ${fileName} deletado com sucesso.`);
    } catch (err) {
      console.error('Erro ao deletar o arquivo:', err);
    }
  }
}
