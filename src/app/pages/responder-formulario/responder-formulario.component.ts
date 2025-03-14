import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NormaxFormPageComponent } from '../../components/normax-form-page/normax-form-page.component';

@Component({
  selector: 'app-responder-formulario',
  templateUrl: './responder-formulario.component.html',
  styleUrls: ['./responder-formulario.component.scss'],
  imports: [RouterOutlet, NormaxFormPageComponent],
  standalone: true,
})
export class ResponderFormularioComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
