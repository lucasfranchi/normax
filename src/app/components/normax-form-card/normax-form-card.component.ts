import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'normax-form-card',
  templateUrl: './normax-form-card.component.html',
  styleUrls: ['./normax-form-card.component.scss'],
  standalone: true,
})
export class NormaxFormCardComponent implements OnInit {
  @Input()
  formId: string;

  @Input()
  formName: string = '';

  @Input()
  isSelected: boolean = false;

  @Input()
  datCreation: string = '';

  @Output()
  onDeleteButtonClick: EventEmitter<string> = new EventEmitter();

  @Output()
  onSelectForm: EventEmitter<{ id: string; isChecked: boolean }> =
    new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public emitSelectChange(event) {
    this.onSelectForm.emit({
      id: this.formId,
      isChecked: event.target.checked,
    });
  }

  public onDeleteButton(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.onDeleteButtonClick.emit(this.formId);
  }
}
