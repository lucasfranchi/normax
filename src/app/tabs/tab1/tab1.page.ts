import { Component } from '@angular/core';
import {
    IonBackButton, IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
} from '@ionic/angular/standalone';
import { RelatoriosListComponent } from 'src/app/pages/relatorios-list/relatorios-list.component';
import {ManegerPageComponent} from "../../components/maneger-page/maneger-page.component";

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
    imports: [
        RelatoriosListComponent,
        ManegerPageComponent
    ],
})
export class Tab1Page {
  constructor() {}
}
