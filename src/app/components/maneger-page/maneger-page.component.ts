import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'maneger-page',
  templateUrl: './maneger-page.component.html',
  styleUrls: ['./maneger-page.component.scss'],
  standalone: true
})
export class ManegerPageComponent  implements OnInit {
  @Input() header: string;
  @Input() subheader: string;

  constructor() { }

  ngOnInit() {}

}
