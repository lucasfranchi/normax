import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonIcon,
  IonLabel,
  IonPicker,
  IonPickerColumn,
  IonPickerColumnOption,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';
import { NormaxIconButtonComponent } from '../../../../components/normax-icon-button/normax-icon-button.component';
import { CategoriaForm } from '../../../../services/normax-form-cache/normax-form-cache';
import { NormaxFormCacheService } from '../../../../services/normax-form-cache/normax-form-cache.service';

@Component({
  selector: 'categoria-seguranca',
  templateUrl: './categoria-seguranca.component.html',
  styleUrls: ['./categoria-seguranca.component.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonPicker,
    IonPickerColumn,
    IonPickerColumnOption,
    IonLabel,
    ReactiveFormsModule,
    IonLabel,
    NormaxIconButtonComponent,
  ],
})
export class CategoriaSegurancaComponent implements OnInit {
  formValue: CategoriaForm = {
    categoriaF: 'F1',
    categoriaP: 'P1',
    categoriaS: 'S1',
  };

  constructor(
    private _router: Router,
    private _formOrganizerService: NormaxFormCacheService
  ) {
    addIcons({ arrowBackOutline, arrowForwardOutline });
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
    const id = this._formOrganizerService.getRawFormId();
    if (id) {
      this._router.navigate(['/responder-formulario/apresentacao-maquina'], {
        queryParams: {
          id: this._formOrganizerService.getRawFormId(),
        },
      });
    } else {
      this._router.navigate(['/responder-formulario/apresentacao-maquina']);
    }
  }

  public nextPage(): void {
    this._formOrganizerService.addFormValues(
      'categoriaSeguranca',
      this.formValue
    );
    this._router.navigateByUrl('/responder-formulario/limites-maquina');
  }
}
