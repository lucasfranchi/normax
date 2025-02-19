import { Injectable } from '@angular/core';
import { ReportOrganizerInterface } from './report-organizer';

@Injectable({
  providedIn: 'root',
})
export class ReportOrganizerService {
  reports: Array<ReportOrganizerInterface> = [];

  constructor() {}

  public addReport(report: ReportOrganizerInterface): void {
    const existingObjects = this.reports.filter((obj) => obj.id === report.id);

    // Ordena a lista de objetos existente pelo identificador
    existingObjects.sort((a, b) => {
      const aIdentifier = parseFloat(a.identificador);
      const bIdentifier = parseFloat(b.identificador);
      return aIdentifier - bIdentifier;
    });

    // Define o novo identificador com base na lista ordenada
    const newIdentifier =
      existingObjects.length > 0
        ? (
            parseFloat(
              existingObjects[existingObjects.length - 1].identificador
            ) + 0.1
          ).toFixed(1)
        : (report.id + 0.1).toFixed(1);

    report.identificador = newIdentifier;
    this.reports.push(report);

    // Ordena a lista de objetos por ID
    this.reports.sort((a, b) => a.id - b.id);
  }

  public getReports(): Array<ReportOrganizerInterface> {
    return this.reports;
  }

  public removeReport(id: number): void {
    this.reports = this.reports.filter((it) => it.id !== id);
  }

  public clearReports(): void {
    this.reports = [];
  }
}
