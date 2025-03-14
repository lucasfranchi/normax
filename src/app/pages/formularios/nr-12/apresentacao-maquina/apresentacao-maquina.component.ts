import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  ToastController, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ApresentacaoMaquinaForm } from '../../../../services/form-organizer/form-organizer';
import { FormOrganizerService } from '../../../../services/form-organizer/form-organizer.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ImageSelectorInterface } from '../apreciacao-risco/apreciacao-risco';
import { NormaxIconButtonComponent } from "../../../../components/normax-icon-button/normax-icon-button.component";
import { addIcons } from 'ionicons';
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';

@Component({
  selector: 'apresentacao-maquina',
  templateUrl: './apresentacao-maquina.component.html',
  styleUrls: ['./apresentacao-maquina.component.scss'],
  imports: [IonIcon, IonButton,
    IonInput,
    IonText,
    IonDatetimeButton,
    IonModal,
    IonDatetime,
    IonCheckbox,
    IonLabel,
    ReactiveFormsModule,
    IonTextarea, NormaxIconButtonComponent],
  standalone: true,
})
export class ApresentacaoMaquinaComponent implements OnInit {
  formGroup: FormGroup;
  formValues: ApresentacaoMaquinaForm = null;
  imageSelector?: ImageSelectorInterface = null;

  constructor(
    private _fb: FormBuilder,
    private _location: Location,
    private _router: Router,
    private _formOrganizerService: FormOrganizerService,
    private toastController: ToastController
  ) {
    addIcons({arrowBackOutline,arrowForwardOutline});
  }

  ngOnInit() {
    const form = this._formOrganizerService.getFormValue().apresentacaoMaquina;
    if (form) {
      this.formValues = {
        ...form,
        dataInspecao: this._reformatDate(form.dataInspecao),
      };
    }
    this.formGroup = this._fb.group({
      maquina: ['', [Validators.required]],
      relMaquina: ['', [Validators.required]],
      numTagSeri: ['', [Validators.required]],
      localInstalacao: ['', [Validators.required]],
      anoFabricacao: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
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
      procedimentoLoto: [],
      respTecnico: ['', [Validators.required]],
      crea: ['', [Validators.required]],
      qualificacao: ['', [Validators.required]],
    });
    this.formGroup.patchValue(this.formValues);
  }

  public returnPage(): void {
    this._location.back();
  }

  public nextPage(): void {
    if(this.formGroup.invalid) {
      this.formGroup.markAllAsTouched()
      return
    }
      if(this.imageSelector) this._formOrganizerService.addCapaPhoto(this.imageSelector);
      this._formOrganizerService.addFormValues('apresentacaoMaquina', {
        ...this.formGroup.value,
        dataInspecao: this._formatDate(this.formGroup.value.dataInspecao),
      });
      this._router.navigateByUrl('/responder-formulario/categoria-seguranca');
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });

    const img = new Image();
    img.onload = () => {
      this.imageSelector = {
        image: image.dataUrl,
        resolution: {
          width: img.width,
          height: img.height,
        },
      };
    };
    img.src = image.dataUrl;
    await this._showToast('Imagem selecionada com sucesso!');
  }

  async selectFromGallery() {
    const image = await Camera.getPhoto({
      quality: 100,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos,
    });

    const img = new Image();
    img.onload = () => {
      this.imageSelector = {
        image: image.dataUrl,
        resolution: {
          width: img.width,
          height: img.height,
        },
      };
    };
    img.src = image.dataUrl;
    await this._showToast('Imagem selecionada com sucesso!');
  }

  private _formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  }

  private _reformatDate(dateString) {
    const [day, month, year] = dateString.split('/');
    return `${year}-${month}-${day}`;
  }

  private async _showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}
