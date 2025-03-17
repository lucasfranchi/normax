import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  addOutline,
  arrowBackOutline,
  arrowForwardOutline,
  documentTextOutline,
} from 'ionicons/icons';
import { NormaxStorageInterface } from 'src/app/services/normax-storage-service/normax-storage';
import { NormaxStorageService } from 'src/app/services/normax-storage-service/normax-storage.service';
import { NormaxFormCardComponent } from '../../../../components/normax-form-card/normax-form-card.component';
import { NormaxIconButtonComponent } from '../../../../components/normax-icon-button/normax-icon-button.component';
import { NormaxLoadingComponent } from '../../../../components/normax-loading/normax-loading.component';

@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.scss'],
  standalone: true,
  imports: [
    IonIcon,
    NormaxLoadingComponent,
    CommonModule,
    NormaxIconButtonComponent,
    NormaxFormCardComponent,
    FormsModule,
  ],
})
export class FormsListComponent implements OnInit {
  isLoading: boolean = false;
  forms: Array<NormaxStorageInterface> = [];
  isAllChecked: boolean = false;

  constructor(
    private _router: Router,
    private _location: Location,
    private _normaxStorageService: NormaxStorageService
  ) {
    addIcons({
      addOutline,
      documentTextOutline,
      arrowBackOutline,
      arrowForwardOutline,
    });
    this._normaxStorageService.init().then(() => {
      this._updateForms();
    });
  }

  ngOnInit() {}

  public returnPage(): void {
    this._location.back();
  }

  public createForm() {
    this._router.navigate(['/responder-formulario/apresentacao-maquina']);
  }

  public editForm(id: string) {
    this._router.navigate(['/responder-formulario/apresentacao-maquina'], {
      queryParams: {
        id: id,
      },
    });
  }

  public deleteForm(formId: string) {
    this._normaxStorageService.deleteForm(formId);
    this._updateForms();
  }

  public toggleSelectedForms(event) {
    this.isAllChecked = event.target.checked;
    this.forms.forEach((form) => (form.isSelected = this.isAllChecked));
  }

  public toggleFormSelect(event: { id: string; isChecked: boolean }) {
    this.forms.find((form) => form.id === event.id).isSelected =
      event.isChecked;
    if (!this.forms.every((form) => form.isSelected)) {
      this.isAllChecked = false;
    }
  }

  private _updateForms() {
    this._normaxStorageService.getAllForms().then((it) => {
      this.forms = it.map((form) => {
        return {
          ...form,
          isSelected: false,
        } as NormaxStorageInterface;
      });
    });
  }
}
