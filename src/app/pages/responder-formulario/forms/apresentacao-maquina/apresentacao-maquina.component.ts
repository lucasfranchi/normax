import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonCheckbox,
  IonDatetime,
  IonDatetimeButton,
  IonInput,
  IonLabel,
  IonModal,
  IonText,
  IonTextarea,
} from '@ionic/angular/standalone';
import { ApresentacaoMaquinaForm } from '../../../../services/form-organizer/form-organizer';
import { FormOrganizerService } from '../../../../services/form-organizer/form-organizer.service';

@Component({
  selector: 'apresentacao-maquina',
  templateUrl: './apresentacao-maquina.component.html',
  styleUrls: ['./apresentacao-maquina.component.scss'],
  imports: [
    IonInput,
    IonText,
    IonDatetimeButton,
    IonModal,
    IonDatetime,
    IonCheckbox,
    IonLabel,
    ReactiveFormsModule,
    IonTextarea,
  ],
  standalone: true,
})
export class ApresentacaoMaquinaComponent implements OnInit {
  formGroup: FormGroup;
  formValues: ApresentacaoMaquinaForm = null;

  constructor(
    private _fb: FormBuilder,
    private _location: Location,
    private _router: Router,
    private _formOrganizerService: FormOrganizerService
  ) {}

  ngOnInit() {
    const form = this._formOrganizerService.getFormValue().apresentacaoMaquina;
    if (form) {
      this.formValues = {
        ...form,
        dataInspecao: this._reformatDate(form.dataInspecao),
      };
    }
    this.formGroup = this._fb.group({
      maquina: [],
      relMaquina: [],
      numTagSeri: [],
      localInstalacao: [],
      anoFabricacao: [],
      tipo: [],
      dataInspecao: [new Date().toISOString().split('T')[0]],
      feEletrica: [],
      fePneumatica: [],
      feHidraulica: [],
      feOutra: [],
      ssProtecoesFixa: [],
      ssProtecoesMoveis: [],
      ssDispositivo: [],
      ssComando: [],
      ssScanner: [],
      ssCortina: [],
      ssProtecao: [],
      ssBloco: [],
      ssSensores: [],
      ssCalco: [],
      ssRele: [],
      ssChave: [],
      ssRearme: [],
      ssSinal: [],
      ssOutros: [],
      respTecnico: [],
      crea: [],
      qualificacao: [],
    });
    this.formGroup.patchValue(this.formValues);
  }

  public returnPage(): void {
    this._location.back();
  }

  public nextPage(): void {
    console.log({
      ...this.formGroup.value,
      dataInspecao: this._formatDate(this.formGroup.value.dataInspecao),
    });
    this._formOrganizerService.addFormValues('apresentacaoMaquina', {
      ...this.formGroup.value,
      dataInspecao: this._formatDate(this.formGroup.value.dataInspecao),
    });
    this._router.navigateByUrl('/responder-formulario/categoria-seguranca');
  }

  private _formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  }

  private _reformatDate(dateString) {
    const [day, month, year] = dateString.split('/');
    return `${year}-${month}-${day}`;
  }
}
