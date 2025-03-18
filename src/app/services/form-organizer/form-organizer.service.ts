import { Injectable } from '@angular/core';
import { ImageSelectorInterface } from 'src/app/pages/formularios/nr-12/apreciacao-risco/apreciacao-risco';
import { NormaxStorageFormsInterface } from '../normax-storage-service/normax-storage';
import { FormOrganizerInterface } from './form-organizer';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class FormOrganizerService {
  private forms?: FormOrganizerInterface = {
    apresentacaoMaquina: null,
    categoriaSeguranca: {
      categoriaF: 'F1',
      categoriaP: 'P1',
      categoriaS: 'S1',
    },
    limitesMaquina: null,
    capa: null,
  };
  private imageCapa?: ImageSelectorInterface = null;
  private formId?: string = null;

  constructor() {}

  public addFormValues(
    key:
      | 'apresentacaoMaquina'
      | 'categoriaSeguranca'
      | 'limitesMaquina'
      | 'capa',
    formValue: any
  ) {
    this.forms[key] = formValue;
  }

  public setStorageForm(formValues: {
    id: string;
    data: NormaxStorageFormsInterface;
  }) {
    this.forms = {
      apresentacaoMaquina: formValues.data.apresentacaoMaquina,
      categoriaSeguranca: formValues.data.categoriaSeguranca,
      limitesMaquina: formValues.data.limitesMaquina,
      capa: formValues.data.capa,
    };
    this.formId = formValues.id;
  }

  public getFormValue() {
    return this.forms;
  }

  public getFormId() {
    return this.formId || uuidv4();
  }

  public getRawFormId() {
    return this.formId;
  }

  public addCapaPhoto(imageSelector: ImageSelectorInterface) {
    this.imageCapa = imageSelector;
  }

  public getImageCapa() {
    return this.imageCapa;
  }

  public clearFormsCache() {
    this.forms = {
      apresentacaoMaquina: null,
      categoriaSeguranca: {
        categoriaF: 'F1',
        categoriaP: 'P1',
        categoriaS: 'S1',
      },
      limitesMaquina: null,
      capa: null,
    };
    this.formId = null;
  }
}
