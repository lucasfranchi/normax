export interface ChangeExcelFileDTO {
  changesList: Array<ChangeExcelFile>;
  reportId: string;
  file: DataTransfer;
}

export interface ChangeExcelFile {
  cell: string;
  worksheetIndex: number;
  value: string | number;
}
