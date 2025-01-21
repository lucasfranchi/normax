import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {IonInput, IonLabel, IonText} from "@ionic/angular/standalone";

@Component({
  selector: 'limites-maquina',
  templateUrl: './limites-maquina.component.html',
  styleUrls: ['./limites-maquina.component.scss'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    IonLabel,
    IonInput,
    IonText,
  ],
  standalone: true
})
export class LimitesMaquinaComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private _fb: FormBuilder, private _location: Location, private _router: Router) {
  }

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
    })
  }

  public returnPage(): void {
    this._location.back()
  }

  public nextPage(): void {
    this._router.navigateByUrl('/responder-formulario/forms');
  }
}
