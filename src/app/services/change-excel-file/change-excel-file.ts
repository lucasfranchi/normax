export interface ChangeExcelFileDTO {
  changesList: Array<ChangeExcelFile>;
  reportId?: string;
  file: DataTransfer;
}

export interface ChangeExcelFile {
  cell: Array<string>;
  worksheetIndex: number;
  value: any;
}
