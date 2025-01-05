import { Injectable } from '@angular/core';
import {ReportOrganizerInterface} from "./report-organizer";

@Injectable({
  providedIn: 'root'
})
export class ReportOrganizerService {

  reports: Array<ReportOrganizerInterface> = []

  constructor() { }

  public addReport(report: ReportOrganizerInterface): void {
    this.reports.push(report);
  }

  public getReports(): Array<ReportOrganizerInterface> {
    return this.reports;
  }

  public removeReport(id: number): void {
    this.reports = this.reports.filter(it => it.id !== id);
  }

  public clearReports(): void {
    this.reports = []
  }
}
