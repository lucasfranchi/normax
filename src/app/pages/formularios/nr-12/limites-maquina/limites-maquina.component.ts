import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonIcon,
  IonInput,
  IonLabel,
  IonText,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';
import { LimitesMaquinaForm } from 'src/app/services/normax-form-cache/normax-form-cache';
import { NormaxFormCacheService } from 'src/app/services/normax-form-cache/normax-form-cache.service';
import { NormaxIconButtonComponent } from '../../../../components/normax-icon-button/normax-icon-button.component';

@Component({
  selector: 'limites-maquina',
  templateUrl: './limites-maquina.component.html',
  styleUrls: ['./limites-maquina.component.scss'],
  imports: [
    IonIcon,
    FormsModule,
    ReactiveFormsModule,
    IonLabel,
    IonInput,
    IonText,
    NormaxIconButtonComponent,
  ],
  standalone: true,
})
export class LimitesMaquinaComponent implements OnInit {
  formGroup: FormGroup;
  formValues: LimitesMaquinaForm = null;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _formOrganizerService: NormaxFormCacheService
  ) {
    addIcons({ arrowBackOutline, arrowForwardOutline });
  }

  ngOnInit() {
    const form = this._formOrganizerService.getFormValue().limitesMaquina;
    if (form) {
      this.formValues = form;
    }
    this.formGroup = this._fb.group({
      ambiente: ['', [Validators.required]],
      treinamentoOp: ['', [Validators.required]],
      operador: ['', [Validators.required]],
      manutencao: ['', [Validators.required]],
      vidaUtil: ['', [Validators.required]],
      avaliacaoErgonomica: ['', [Validators.required]],
      manuelMaquina: ['', [Validators.required]],
      certificadosCapacitacao: ['', [Validators.required]],
      groPgr: ['', [Validators.required]],
      procOperacionais: ['', [Validators.required]],
      loto: ['', [Validators.required]],
    });
    this.formGroup.patchValue(this.formValues);
  }

  public returnPage(): void {
    const id = this._formOrganizerService.getRawFormId();
    if (id) {
      this._router.navigate(['/responder-formulario/categoria-seguranca'], {
        queryParams: {
          id: this._formOrganizerService.getRawFormId(),
        },
      });
    } else {
      this._router.navigate(['/responder-formulario/categoria-seguranca']);
    }
  }

  public nextPage(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    this._formOrganizerService.addFormValues(
      'limitesMaquina',
      this.formGroup.value
    );
    this._router.navigateByUrl('/responder-formulario/reports');
  }
}
