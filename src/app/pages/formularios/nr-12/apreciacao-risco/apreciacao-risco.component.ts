import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import {
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
  IonSelect,
  IonSelectOption,
  IonText,
  IonTextarea,
  IonTitle,
  IonToolbar,
  ToastController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, helpCircleOutline } from 'ionicons/icons';
import { ChangeExcelFileDTO } from 'src/app/services/change-excel-file/change-excel-file';
import { ChangeExcelFileService } from 'src/app/services/change-excel-file/change-excel-file.service';
import { NormaxLoadingComponent } from '../../../../components/normax-loading/normax-loading.component';
import {
  ApreciacaoRiscoPresets,
  getCellChangesByForm,
  ImageSelectorInterface,
} from './apreciacao-risco';
import { getPreset } from './apreciacao-risco-presets/apreciacao-risco-preset';
import { ReportOrganizerService } from 'src/app/services/report-organizer/report-organizer.service';

@Component({
  selector: 'rl-apreciacao-risco',
  templateUrl: './apreciacao-risco.component.html',
  styleUrls: ['./apreciacao-risco.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
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
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonTitle,
    IonToolbar,
    ReactiveFormsModule,
    IonText,
    NormaxLoadingComponent,
  ],
  standalone: true,
})
export class ApreciacaoRiscoComponent implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;

  presets: Array<ApreciacaoRiscoPresets> = [];

  formGroup: FormGroup;
  isLoading: boolean = false;
  reportId: string = '';
  imageSelector?: ImageSelectorInterface = null;

  constructor(
    private _fb: FormBuilder,
    private _changeExcelFileService: ChangeExcelFileService,
    private _reportOrganizer: ReportOrganizerService,
    private _http: HttpClient,
    private route: ActivatedRoute,
    private toastController: ToastController
  ) {
    addIcons({ helpCircleOutline, arrowBackOutline });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.reportId = params['id'];
      this._createFormGroup();
      this.presets = getPreset(this.reportId);
      this.formGroup.get('relatorio').disable();
    });
  }

  private _createFormGroup() {
    this.formGroup = this._fb.group({
      relatorio: [this.reportId, [Validators.required]],
      perigo: ['', [Validators.required]],
      localizacao: ['', [Validators.required]],
      atividade: ['', [Validators.required]],
      consequenciaRisco: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      arpo: ['', [Validators.required]],
      arfe: ['', [Validators.required]],
      arglp: ['', [Validators.required]],
      arnp: ['', [Validators.required]],
      erpo: ['', [Validators.required]],
      consideracaoCondAtual: ['', [Validators.required]],
      recomendacoes: ['', [Validators.required]],
    });
  }

  changePreset(event) {
    const formValue = this.presets.find((it) => it.id === event.detail.value);
    this.formGroup.patchValue(formValue.form);
  }

  OnInputChange(input: string) {
    const formValue = {};
    formValue[input] = this.formGroup.get(input).value;
    this.formGroup.patchValue(formValue);
  }

  closeModal() {
    this.modal.dismiss(null, 'cancel');
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
    await this.showToast('Imagem selecionada com sucesso!');
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
    await this.showToast('Imagem selecionada com sucesso!');
  }

  public generateRelatorio() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    if (
      this.formGroup.get('arpo').value != 'NA' &&
      this.formGroup.get('arfe').value != 'NA' &&
      this.formGroup.get('arglp').value != 'NA' &&
      this.formGroup.get('arnp').value != 'NA'
    ) {
      const media =
        Number(this.formGroup.get('arpo').value.replace(',', '.')) *
        Number(this.formGroup.get('arfe').value.replace(',', '.')) *
        Number(this.formGroup.get('arglp').value.replace(',', '.')) *
        Number(this.formGroup.get('arnp').value.replace(',', '.'));

      if (media >= 6) {
        this._reportOrganizer.addMedia(media);
      }
    }

    this._http
      .get('/assets/NR-12/NR-12.xlsx', { responseType: 'blob' })
      .subscribe((data) => {
        const file = new File([data], 'NR-12.xlsx', { type: data.type });
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);

        const changeExcelFileDTO: ChangeExcelFileDTO = {
          changesList: Object.keys(this.formGroup.value)
            .filter((it) =>
              getCellChangesByForm(
                this.formGroup.value,
                it,
                Number(this.reportId) - 1
              )
            )
            .map((key) =>
              getCellChangesByForm(
                this.formGroup.value,
                key,
                Number(this.reportId) - 1
              )
            ),
          file: dataTransfer,
          reportId: this.reportId,
        };
        this._changeExcelFileService.changeExcelFile(
          changeExcelFileDTO,
          this.imageSelector
        );
      });
  }

  onWillDismiss(event: Event) {}

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}
