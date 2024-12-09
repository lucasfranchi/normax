import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonModal,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, helpCircleOutline } from 'ionicons/icons';
import { SistemaGerstaoQualidadeItem } from './sistema-gestao-qualidade';

@Component({
  selector: 'sistema-gestao-qualidade',
  templateUrl: './sistema-gestao-qualidade.component.html',
  styleUrls: ['./sistema-gestao-qualidade.component.scss'],
  imports: [
    CommonModule,
    IonInput,
    IonGrid,
    IonCol,
    IonRow,
    IonButton,
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    ReactiveFormsModule,
    FormsModule,
  ],
  standalone: true,
})
export class SistemaGestaoQualidadeComponent implements OnInit {
  formGroup: FormGroup;
  items: Array<SistemaGerstaoQualidadeItem> = [];
  newItem: SistemaGerstaoQualidadeItem = { rev: 0, data: '', alteracoes: '', revisadoPor: '' };
  isModalOpen: boolean = false;
  isValidForm: boolean = true;

  constructor(private _fb: FormBuilder) {
    addIcons({ helpCircleOutline, arrowBackOutline });
  }

  ngOnInit() {
    this._createFormGroup();

    this.formGroup.valueChanges.subscribe(it => {
      this.isValidForm = this.formGroup.valid
    })
  }

  private _createFormGroup() {
    this.formGroup = this._fb.group({
      documento: ['', [Validators.required]],
      elaboracaoInicial: ['', [Validators.required]],
      leituraCritica: ['', [Validators.required]],
      aprovação: [],
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  addRegistro() {
    this.items.push({ ...this.newItem });
    console.log(this.newItem)
    this.newItem = { rev: this.newItem.rev++, data: '', alteracoes: '', revisadoPor: '' };
    this.closeModal();
  }
}
