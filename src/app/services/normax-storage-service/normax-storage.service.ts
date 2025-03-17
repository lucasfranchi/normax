import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NormaxStorageFormsInterface } from './normax-storage';

@Injectable({
  providedIn: 'root'
})
export class NormaxStorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Create/Update
  async setForm(formId: string, formData: NormaxStorageFormsInterface) {
    await this._storage?.set(formId, formData);
  }

  // Read one
  async getForm(formId: string): Promise<NormaxStorageFormsInterface> {
    return await this._storage?.get(formId);
  }

  // Read all
  async getAllForms() {
    const forms: { id: string, data: NormaxStorageFormsInterface }[] = [];
    await this._storage?.forEach((value, key) => {
      forms.push({ id: key, data: value });
    });
    return forms;
  }

  // Delete
  async deleteForm(formId: string) {
    await this._storage?.remove(formId);
  }

  // Clear all
  async clearAll() {
    await this._storage?.clear();
  }
}
