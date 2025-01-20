import {Component, OnInit} from '@angular/core';
import {IonLabel, IonPicker, IonPickerColumn, IonPickerColumnOption} from "@ionic/angular/standalone";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Location} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'categoria-seguranca',
  templateUrl: './categoria-seguranca.component.html',
  styleUrls: ['./categoria-seguranca.component.scss'],
  standalone: true,
  imports: [
    IonPicker,
    IonPickerColumn,
    IonPickerColumnOption,
    IonLabel,
    ReactiveFormsModule,
    IonLabel
  ]
})
export class CategoriaSegurancaComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private _fb: FormBuilder, private _location: Location, private _router: Router) {
  }

  ngOnInit() {
  }


  public returnPage(): void {
    this._location.back()
  }

  public nextPage(): void {
    this._router.navigateByUrl('/responder-formulario/forms');
  }
}
