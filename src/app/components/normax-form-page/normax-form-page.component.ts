import { Component, Input, OnInit } from '@angular/core';
import { IonBackButton, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'normax-form-page',
  templateUrl: './normax-form-page.component.html',
  styleUrls: ['./normax-form-page.component.scss'],
  standalone: true,
})
export class NormaxFormPageComponent implements OnInit {
  @Input() header: string;
  @Input() subheader: string;

  constructor() {}

  ngOnInit() {}
}
