import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
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
import { NormaxFormsOrganizerService } from 'src/app/services/normax-forms-organizer/normax-forms-organizer.service';

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
export class FormsListComponent  {
  isLoading: boolean = false;
  forms: Array<NormaxStorageInterface> = [];
  isAllChecked: boolean = false;

  constructor(
    private _router: Router,
    private _location: Location,
    private _normaxStorageService: NormaxStorageService,
    private _normaxFormsOrganizerService: NormaxFormsOrganizerService
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
    this.isAllChecked = this.forms.every((form) => form.isSelected);
  }

  public convertReports() {
    const formIds = this.forms.filter(it => it.isSelected).map(it => it.id);
    this._normaxFormsOrganizerService.generateReports(formIds);
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
