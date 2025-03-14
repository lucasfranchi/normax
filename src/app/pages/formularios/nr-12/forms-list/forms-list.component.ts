import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NormaxIconButtonComponent } from '../../../../components/normax-icon-button/normax-icon-button.component';
import { NormaxLoadingComponent } from '../../../../components/normax-loading/normax-loading.component';
import { Router } from '@angular/router';
import { IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';

@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.scss'],
  standalone: true,
  imports: [IonIcon, NormaxLoadingComponent, CommonModule, NormaxIconButtonComponent],
})
export class FormsListComponent implements OnInit {
  isLoading: boolean = false;

  constructor(private _router: Router) {
    addIcons({ addOutline });
  }

  ngOnInit() {}

  public createForm() {
    this._router.navigate(['/responder-formulario/apresentacao-maquina']);
  }
}
