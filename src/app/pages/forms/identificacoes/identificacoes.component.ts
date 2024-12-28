import { CommonModule } from '@angular/common';
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
  IonButton,
  IonInput
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-identificacoes',
  templateUrl: './identificacoes.component.html',
  styleUrls: ['./identificacoes.component.scss'],
  imports: [
    CommonModule,
    IonInput,
    IonButton,
    ReactiveFormsModule,
    FormsModule,
  ],
  standalone: true,
})
export class IdentificacoesComponent  implements OnInit {
  formGroup: FormGroup;
  isValidForm: boolean = false;

  constructor(private _fb: FormBuilder, private _router: Router) {
  }

  ngOnInit() {
    this._createFormGroup();

    this.formGroup.valueChanges.subscribe((it) => {
      this.isValidForm = this.formGroup.valid;
    });
  }

  private _createFormGroup() {
    this.formGroup = this._fb.group({
      empresa: ['', [Validators.required]],
      cnpj: ['', [Validators.required]],
      ie: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      numDocumento: ['', [Validators.required]],
      nomeProjeto: ['', [Validators.required]],
      revisao: ['', [Validators.required]],
      respAcompanhamento: ['', [Validators.required]],
      respTecnico: ['', [Validators.required]],
      crea: ['', [Validators.required]],
      titulacao: ['', [Validators.required]],
    });
  }

  public nextPage() {
    this._router.navigate(['/responder-formulario/identificacoes']);
  }
}
