import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'normax-report-card',
  templateUrl: './normax-report-card.component.html',
  styleUrls: ['./normax-report-card.component.scss'],
  imports: [],
  standalone: true,
})
export class NormaxReportCardComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  subtitle: string;

  @Output() onItemClick: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public onItemClickEvent() {
    this.onItemClick.emit(this.title);
  }
}
