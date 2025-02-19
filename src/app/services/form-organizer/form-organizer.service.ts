import { Injectable } from '@angular/core';
import { FormOrganizerInterface } from './form-organizer';

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
  };

  constructor() {}

  public addFormValues(
    key: 'apresentacaoMaquina' | 'categoriaSeguranca' | 'limitesMaquina',
    formValue: any
  ) {
    this.forms[key] = formValue;
  }

  public getFormValue() {
    return this.forms;
  }
}
