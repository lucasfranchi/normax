import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonLabel,
  IonPicker,
  IonPickerColumn,
  IonPickerColumnOption, IonIcon } from '@ionic/angular/standalone';
import { CategoriaForm } from '../../../../services/form-organizer/form-organizer';
import { FormOrganizerService } from '../../../../services/form-organizer/form-organizer.service';
import { NormaxIconButtonComponent } from "../../../../components/normax-icon-button/normax-icon-button.component";
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'categoria-seguranca',
  templateUrl: './categoria-seguranca.component.html',
  styleUrls: ['./categoria-seguranca.component.scss'],
  standalone: true,
  imports: [IonIcon,
    IonPicker,
    IonPickerColumn,
    IonPickerColumnOption,
    IonLabel,
    ReactiveFormsModule,
    IonLabel, NormaxIconButtonComponent],
})
export class CategoriaSegurancaComponent implements OnInit {
  formValue: CategoriaForm = {
    categoriaF: 'F1',
    categoriaP: 'P1',
    categoriaS: 'S1',
  };

  constructor(
    private _location: Location,
    private _router: Router,
    private _formOrganizerService: FormOrganizerService
  ) {
     addIcons({arrowBackOutline,arrowForwardOutline});
  }

  ngOnInit(): void {
    this.formValue =
      this._formOrganizerService.getFormValue().categoriaSeguranca;
  }

  public onPickerChange(key: string, event: CustomEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.formValue[key] = event.detail.value;
  }

  public returnPage(): void {
    this._location.back();
  }

  public nextPage(): void {
    this._formOrganizerService.addFormValues(
      'categoriaSeguranca',
      this.formValue
    );
    this._router.navigateByUrl('/responder-formulario/limites-maquina');
  }
}
