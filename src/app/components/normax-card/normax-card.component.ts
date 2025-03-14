import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { construct } from 'ionicons/icons';

@Component({
  selector: 'normax-card',
  templateUrl: './normax-card.component.html',
  styleUrls: ['./normax-card.component.scss'],
  imports: [IonIcon],
  standalone: true,
})
export class NormaxCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() route: string = '';

  constructor(private router: Router) {
    addIcons({ construct });
  }

  ngOnInit() {}

  public redirectToPage(): void {
    this.router.navigate(['responder-formulario' + this.route]);
  }
}
