import {Component, OnInit} from '@angular/core';
import {IonContent, IonHeader, IonItem, IonList, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {Directory, Filesystem} from "@capacitor/filesystem";
import {CommonModule} from "@angular/common";
import {FileOpener} from "@capacitor-community/file-opener";

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem]
})
export class Tab2Page implements OnInit {
  pdfFiles: string[] = [];

  ngOnInit() {
    this.loadSavedReports();
  }

  private async loadSavedReports() {
    const result = await Filesystem.readdir({
      path: '',
      directory: Directory.Documents,
    });

    this.pdfFiles = result.files
      .filter(file => file.name && file.name.toLowerCase().endsWith('.pdf'))
      .map(file => file.name);
  }

  public async openPdf(fileName: string) {
    const directory = Directory.Documents;

    const fileUri = await Filesystem.getUri({
      directory,
      path: fileName
    });

    await FileOpener.open({
      filePath: fileUri.uri,
      contentType: 'application/pdf'
    }).catch(err => {
      console.error('Erro ao abrir o PDF:', err);
    });
  }
}
