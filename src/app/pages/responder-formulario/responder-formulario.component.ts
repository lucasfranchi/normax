import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar,} from '@ionic/angular/standalone';
import {ManegerFormPageComponent} from "../../components/maneger-form-page/maneger-form-page.component";

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
    ManegerFormPageComponent,

  ],
  standalone: true,
})
export class ResponderFormularioComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
