import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'maneger-report-card',
  templateUrl: './maneger-report-card.component.html',
  styleUrls: ['./maneger-report-card.component.scss'],
  imports: [],
  standalone: true,
})
export class ManegerReportCardComponent implements OnInit {
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
