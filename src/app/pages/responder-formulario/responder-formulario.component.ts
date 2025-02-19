import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManegerFormPageComponent } from '../../components/maneger-form-page/maneger-form-page.component';

@Component({
  selector: 'app-responder-formulario',
  templateUrl: './responder-formulario.component.html',
  styleUrls: ['./responder-formulario.component.scss'],
  imports: [RouterOutlet, ManegerFormPageComponent],
  standalone: true,
})
export class ResponderFormularioComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
