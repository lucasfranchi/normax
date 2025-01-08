import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators,} from '@angular/forms';
import {
  ActionSheetController,
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
  IonSpinner,
  IonText,
  IonTextarea,
  IonTitle,
  IonToolbar,
  Platform,
} from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import {arrowBackOutline, helpCircleOutline} from 'ionicons/icons';
import {ChangeExcelFileDTO} from 'src/app/services/change-excel-file/change-excel-file';
import {ChangeExcelFileService} from 'src/app/services/change-excel-file/change-excel-file.service';
import {getCellChangesByForm} from './apreciacao-risco';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from "@angular/router";
import {CommonModule} from "@angular/common";

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
    IonSpinner,
    IonText,
  ],
  standalone: true,
})
export class ApreciacaoRiscoComponent implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;

  formGroup: FormGroup;
  isLoading: boolean = false;
  reportId: string = "";
  selectedImageBase64: string | null = null;

  constructor(
    private _fb: FormBuilder,
    private _changeExcelFileService: ChangeExcelFileService,
    private _http: HttpClient,
    private route: ActivatedRoute,
    private actionsheetCtrl: ActionSheetController,
    private platform: Platform,
  ) {
    addIcons({helpCircleOutline, arrowBackOutline});
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.reportId = params['id']
      this._createFormGroup();
      this.formGroup.get('relatorio').disable()
    });
  }

  private _createFormGroup() {
    this.formGroup = this._fb.group({
      relatorio: [this.reportId, [Validators.required]],
      perigo: ["", [Validators.required]],
      localizacao: ["", [Validators.required]],
      atividade: ["", [Validators.required]],
      consequenciaRisco: ["", [Validators.required]],
      tipo: ["", [Validators.required]],
      arpo: ["", [Validators.required]],
      arfe: ["", [Validators.required]],
      arglp: ["", [Validators.required]],
      arnp: ["", [Validators.required]],
      erpo: ["", [Validators.required]],
      consideracaoCondAtual: ["", [Validators.required]],
      recomendacoes: ["", [Validators.required]],
    });
  }

  OnInputChange(input: string) {
    const formValue = {}
    formValue[input] = this.formGroup.get(input).value;
    this.formGroup.patchValue(
      formValue
    )
  }

  closeModal() {
    this.modal.dismiss(null, 'cancel');
  }

  // Abre o seletor de arquivos
  selectImage() {
    this.fileInput.nativeElement.click();
  }

  // Manipula o arquivo selecionado
  async onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImageBase64 = await this.convertToBase64(file);
    }
  }

  // Converte o arquivo em base64
  async convertToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  public generateRelatorio() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched()
      return;
    }
    this.isLoading = true;
    this._http.get('/assets/NR-12.xlsx', {responseType: 'blob'}).subscribe(data => {
      const file = new File([data], 'NR-12.xlsx', {type: data.type});
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);

      const changeExcelFileDTO: ChangeExcelFileDTO = {
        changesList: Object.keys(this.formGroup.value)
          .filter((it) => getCellChangesByForm(this.formGroup.value, it, Number(this.reportId) - 1))
          .map((key) => getCellChangesByForm(this.formGroup.value, key, Number(this.reportId) - 1)),
        file: dataTransfer,
        reportId: this.reportId
      };
      this._changeExcelFileService.changeExcelFile(changeExcelFileDTO, this.selectedImageBase64);
    })
  }

  onWillDismiss(event: Event) {
  }

}
