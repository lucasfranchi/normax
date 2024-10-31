import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  IonToolbar,
  IonHeader,
  IonContent,
  IonTitle,
  IonBackButton,
  IonButtons,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-responder-formulario',
  templateUrl: './responder-formulario.component.html',
  styleUrls: ['./responder-formulario.component.scss'],
  imports: [
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
    IonHeader,
    IonToolbar,
    RouterOutlet,
  ],
  standalone: true,
})
export class ResponderFormularioComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
