import { Component } from '@angular/core';
import { RelatoriosListComponent } from 'src/app/pages/relatorios-list/relatorios-list.component';
import { NormaxPageComponent } from '../../components/normax-page/normax-page.component';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [RelatoriosListComponent, NormaxPageComponent],
})
export class Tab1Page {
  constructor() {}
}
