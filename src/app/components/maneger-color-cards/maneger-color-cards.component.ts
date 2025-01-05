import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ManagerColorCardsInterface} from "./maneger-color-cards";
import {IonButton} from "@ionic/angular/standalone";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'maneger-color-cards',
  templateUrl: './maneger-color-cards.component.html',
  styleUrls: ['./maneger-color-cards.component.scss'],
  imports: [
    CommonModule,
    IonButton
  ],
  standalone: true
})
export class ManegerColorCardsComponent  implements OnInit {
  @Input()
  card: ManagerColorCardsInterface = null;

  @Output()
  onAddButtonClick: EventEmitter<any> = new EventEmitter();

  @Output()
  onDeleteButtonClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

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
