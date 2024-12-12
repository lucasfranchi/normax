import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonIcon, IonCardHeader, IonCardTitle, IonCardSubtitle } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { construct } from 'ionicons/icons';

@Component({
  selector: 'rl-card',
  templateUrl: './rl-card.component.html',
  styleUrls: ['./rl-card.component.scss'],
  imports: [IonCardSubtitle, IonCardTitle, IonCardHeader, IonIcon],
  standalone: true
})
export class RlCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() route: string = '';

  constructor(private router: Router) {
    addIcons({construct});
  }

  ngOnInit() {}

  public redirectToPage(): void {
    this.router.navigate(['responder-formulario' + this.route]);
  }
}
