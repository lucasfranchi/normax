import { Injectable } from '@angular/core';
import { ApreciacaoRiscoForm } from 'src/app/pages/responder-formulario/forms/apreciacao-risco/apreciacao-risco';

@Injectable({
  providedIn: 'root'
})
export class ApreciacaoFormOrganizerService {
  private formList: ApreciacaoRiscoForm[] = []

  constructor() { }

  public addApreciacaoForm(apreciacaoForm: ApreciacaoRiscoForm) {
    this.formList.push(apreciacaoForm)
  }

  public getApreciacaoFormRisco() {
    return this.formList;
  }
}
