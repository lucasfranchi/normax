import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'normax-icon-button',
  templateUrl: './normax-icon-button.component.html',
  styleUrls: ['./normax-icon-button.component.scss'],
  standalone: true,
})
export class NormaxIconButtonComponent implements OnInit {
  @Input()
  label: string = "";

  constructor() {}

  ngOnInit() {}
}
