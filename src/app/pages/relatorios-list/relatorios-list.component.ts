import { Component, Input } from '@angular/core';
import { addIcons } from 'ionicons';
import { readerOutline } from 'ionicons/icons';
import { ManegerCardComponent } from 'src/app/components/maneger-card/maneger-card.component';
import { RelatorioInterface } from './relatorios-list';

@Component({
  selector: 'relatorios-list',
  templateUrl: './relatorios-list.component.html',
  styleUrls: ['./relatorios-list.component.scss'],
  imports: [ManegerCardComponent],
  standalone: true,
})
export class RelatoriosListComponent {
  @Input() name?: string;

  relatorioList: Array<RelatorioInterface> = [
    {
      title: 'NR-12',
      subtitle: 'Conforme ABNT NBR ISO 12100',
      route: '/apresentacao-maquina',
    },
  ];

  constructor() {
    addIcons({ readerOutline });
  }
}
