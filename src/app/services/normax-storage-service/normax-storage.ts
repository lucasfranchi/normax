import {
  ApresentacaoMaquinaForm,
  CapaForm,
  CategoriaForm,
  LimitesMaquinaForm,
} from '../normax-form-cache/normax-form-cache';
import { ReportOrganizerInterface, ReportOrganizerMedia } from '../report-organizer/report-organizer';

export interface NormaxStorageFormsInterface {
  apresentacaoMaquina?: ApresentacaoMaquinaForm;
  categoriaSeguranca?: CategoriaForm;
  capa?: CapaForm;
  limitesMaquina?: LimitesMaquinaForm;
  name: string;
  date: string;
  reportList: Array<ReportOrganizerInterface>;
  media: ReportOrganizerMedia;
}

export interface NormaxStorageInterface {
  id: string;
  data: NormaxStorageFormsInterface;
  isSelected: boolean;
}
