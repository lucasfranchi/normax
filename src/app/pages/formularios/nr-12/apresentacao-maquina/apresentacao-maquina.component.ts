import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import {
  IonButton,
  IonCheckbox,
  IonDatetime,
  IonDatetimeButton,
  IonIcon,
  IonInput,
  IonLabel,
  IonModal,
  IonText,
  IonTextarea,
  ToastController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';
import { NormaxStorageService } from 'src/app/services/normax-storage-service/normax-storage.service';
import { ReportOrganizerService } from 'src/app/services/report-organizer/report-organizer.service';
import { NormaxIconButtonComponent } from '../../../../components/normax-icon-button/normax-icon-button.component';
import { ApresentacaoMaquinaForm } from '../../../../services/normax-form-cache/normax-form-cache';
import { NormaxFormCacheService } from '../../../../services/normax-form-cache/normax-form-cache.service';
import { ImageSelectorInterface } from '../apreciacao-risco/apreciacao-risco';
import { NormaxFormEnrichService } from 'src/app/services/normax-form-enrich/normax-form-enrich.service';

@Component({
  selector: 'apresentacao-maquina',
  templateUrl: './apresentacao-maquina.component.html',
  styleUrls: ['./apresentacao-maquina.component.scss'],
  imports: [
    IonIcon,
    IonButton,
    IonInput,
    IonText,
    IonDatetimeButton,
    IonModal,
    IonDatetime,
    IonCheckbox,
    IonLabel,
    ReactiveFormsModule,
    IonTextarea,
    NormaxIconButtonComponent,
  ],
  standalone: true,
})
export class ApresentacaoMaquinaComponent implements OnInit {
  formGroup: FormGroup;
  formId: string;
  formValues: ApresentacaoMaquinaForm = null;
  imageSelector?: ImageSelectorInterface = null;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _formOrganizerService: NormaxFormCacheService,
    private _toastController: ToastController,
    private _activatedRoute: ActivatedRoute,
    private _normaxFormEnrichService: NormaxFormEnrichService,
    private _reportOrganizerService: ReportOrganizerService
  ) {
    addIcons({ arrowBackOutline, arrowForwardOutline });
  }

  ngOnInit() {
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
    this._verificaFormId();
  }

  public returnPage(): void {
    this._formOrganizerService.clearFormsCache();
    this._reportOrganizerService.clearMedia();
    this._reportOrganizerService.clearReports();
    this._router.navigate(['/responder-formulario/forms-list']);
  }

  public nextPage(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    if (this.imageSelector)
      this._formOrganizerService.addCapaPhoto(this.imageSelector);
    this._formOrganizerService.addFormValues('apresentacaoMaquina', {
      ...this.formGroup.value,
      dataInspecao: this._formatDate(this.formGroup.value.dataInspecao),
    });
    this._router.navigate([
      '/responder-formulario/categoria-seguranca',
      {
        queryParams: {
          id: this.formId,
        },
      },
    ]);
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
    const toast = await this._toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

  private async _verificaFormId() {
    this.formId = this._activatedRoute.snapshot.queryParams['id'] || null;
    const form = this._formOrganizerService.getFormValue().apresentacaoMaquina;

    if (this.formId && !form) {
      await this._normaxFormEnrichService.getFormAndEnrich(this.formId);
      const updatedForm = this._formOrganizerService.getFormValue().apresentacaoMaquina
      this.formGroup.patchValue(updatedForm);
    } else {
      if (form) {
        this.formValues = {
          ...form,
          dataInspecao: this._reformatDate(form.dataInspecao),
        };
      }
      this.formGroup.patchValue(this.formValues);
    }
  }
}
