import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'normax-page',
  templateUrl: './normax-page.component.html',
  styleUrls: ['./normax-page.component.scss'],
  standalone: true,
})
export class NormaxPageComponent implements OnInit {
  @Input() header: string;
  @Input() subheader: string;

  constructor() {}

  ngOnInit() {}
}
