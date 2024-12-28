export interface ChangeExcelFileDTO {
  changesList: Array<ChangeExcelFile>;
  file: DataTransfer
}

export interface ChangeExcelFile {
  cell: string;
  worksheetIndex: number;
  value: string | number;
}
