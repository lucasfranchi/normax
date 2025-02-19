import { Component, Input, OnInit } from '@angular/core';
import { IonBackButton, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'maneger-form-page',
  templateUrl: './maneger-form-page.component.html',
  styleUrls: ['./maneger-form-page.component.scss'],
  standalone: true,
})
export class ManegerFormPageComponent implements OnInit {
  @Input() header: string;
  @Input() subheader: string;

  constructor() {}

  ngOnInit() {}
}
