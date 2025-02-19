import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IonInput, IonLabel, IonText } from '@ionic/angular/standalone';
import { FormOrganizerService } from 'src/app/services/form-organizer/form-organizer.service';

@Component({
  selector: 'limites-maquina',
  templateUrl: './limites-maquina.component.html',
  styleUrls: ['./limites-maquina.component.scss'],
  imports: [FormsModule, ReactiveFormsModule, IonLabel, IonInput, IonText],
  standalone: true,
})
export class LimitesMaquinaComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _location: Location,
    private _router: Router,
    private _formOrganizerService: FormOrganizerService
  ) {}

  ngOnInit() {
    this.formGroup = this._fb.group({
      ambiente: [],
      treinamentoOp: [],
      operador: [],
      manutencao: [],
      vidaUtil: [],
      avaliacaoErgonomica: [],
      manuelMaquina: [],
      certificadosCapacitacao: [],
      groPgr: [],
      procOperacionais: [],
      loto: [],
    });
  }

  public returnPage(): void {
    this._location.back();
  }

  public nextPage(): void {
    this._formOrganizerService.addFormValues(
      'limitesMaquina',
      this.formGroup.value
    );
    this._router.navigateByUrl('/responder-formulario/forms');
  }
}
