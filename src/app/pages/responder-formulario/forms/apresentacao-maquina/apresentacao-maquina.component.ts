import {Component, OnInit} from '@angular/core';
import {
  IonCheckbox,
  IonDatetime,
  IonDatetimeButton,
  IonInput,
  IonLabel,
  IonModal,
  IonText,
  IonTextarea
} from "@ionic/angular/standalone";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Location} from "@angular/common";
import {Router} from "@angular/router";

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
    IonTextarea
  ],
  standalone: true
})
export class ApresentacaoMaquinaComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private _fb: FormBuilder, private _location: Location, private _router: Router) {
  }

  ngOnInit() {
    this.formGroup = this._fb.group({
      maquina: [],
      relMaquina: [],
      numTagSeri: [],
      localInstalacao: [],
      anoFabricacao: [],
      tipo: [],
      dataInspecao: [],
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
    })
  }

  public returnPage(): void {
    this._location.back()
  }

  public nextPage(): void {
    this._router.navigateByUrl('/responder-formulario/categoria-seguranca');
  }

}
