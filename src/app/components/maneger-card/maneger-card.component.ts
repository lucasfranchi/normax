import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { construct } from 'ionicons/icons';

@Component({
  selector: 'maneger-card',
  templateUrl: './maneger-card.component.html',
  styleUrls: ['./maneger-card.component.scss'],
  imports: [IonIcon],
  standalone: true,
})
export class ManegerCardComponent implements OnInit {
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
