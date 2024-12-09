import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonModal,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, helpCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'rl-apreciacao-risco',
  templateUrl: './apreciacao-risco.component.html',
  styleUrls: ['./apreciacao-risco.component.scss'],
  imports: [
    IonImg,
    IonContent,
    IonTitle,
    IonButtons,
    IonToolbar,
    IonModal,
    IonHeader,
    IonIcon,
    IonButton,
    IonTextarea,
    IonLabel,
    IonItemDivider,
    IonItemGroup,
    IonItem,
    IonInput,
    ReactiveFormsModule,
    FormsModule,
  ],
  standalone: true,
})
export class ApreciacaoRiscoComponent implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  formGroup: FormGroup;

  constructor(private _fb: FormBuilder) {
    addIcons({ helpCircleOutline, arrowBackOutline });
  }

  ngOnInit() {
    this._createFormGroup();
  }

  private _createFormGroup() {
    this.formGroup = this._fb.group({
      perigo: [''],
      localizacao: [''],
      atividade: [''],
      consequenciaRisco: [''],
      tipo: [''],
      avaliacaoRisco: [],
      estimativaRisco: [],
      reducaoRiscoPerc: [],
      consideracaoCondAtual: [''],
      recomendacoes: [''],
    });
  }

  closeModal() {
    this.modal.dismiss(null, 'cancel');
  }

  onWillDismiss(event: Event) {}
}
