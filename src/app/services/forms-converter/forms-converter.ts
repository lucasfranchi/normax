import { getApresentacaoCellChangesByForm } from "src/app/pages/responder-formulario/forms/apresentacao-maquina/apresentacao-maquina";
import { ChangeExcelFile } from "../change-excel-file/change-excel-file";
import { FormOrganizerInterface } from "../form-organizer/form-organizer";
import { getCategoriaCellChangesByForm } from "src/app/pages/responder-formulario/forms/categoria-seguranca/categoria-seguranca";
import { getLimitesCellChangesByForm } from "src/app/pages/responder-formulario/forms/limites-maquina/limites-maquina";

export function getLinkedForms(key: string, form: FormOrganizerInterface): Array<ChangeExcelFile> {
    switch(key) {
      case 'apresentacaoMaquina':
        return Object.keys(form.apresentacaoMaquina).map(it => getApresentacaoCellChangesByForm(form.apresentacaoMaquina, it, 17))
      case 'categoriaSeguranca':
        return Object.keys(form.categoriaSeguranca).map(it => getCategoriaCellChangesByForm(form.categoriaSeguranca, it, 18))
      case 'limitesMaquina':
        return Object.keys(form.limitesMaquina).map(it => getLimitesCellChangesByForm(form.limitesMaquina, it, 19))
    }

    return null;
}

