import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';
import { NormaxColorCardsInterface } from './normax-color-cards';

@Component({
  selector: 'normax-color-cards',
  templateUrl: './normax-color-cards.component.html',
  styleUrls: ['./normax-color-cards.component.scss'],
  imports: [CommonModule, IonButton],
  standalone: true,
})
export class NormaxColorCardsComponent implements OnInit {
  @Input()
  card: NormaxColorCardsInterface = null;

  @Output()
  onAddButtonClick: EventEmitter<any> = new EventEmitter();

  @Output()
  onDeleteButtonClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public onAddButton(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.onAddButtonClick.emit(this.card);
  }

  public onDeleteButton(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.onDeleteButtonClick.emit(this.card);
  }
}
