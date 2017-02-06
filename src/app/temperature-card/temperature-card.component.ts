import { Component, OnInit, Input } from '@angular/core';
import { ITemperature } from '../models/ITemperature';


@Component({
  selector: 'temperature-card',
  templateUrl: './temperature-card.component.html',
  styleUrls: ['./temperature-card.component.scss']
})
export class TemperatureCardComponent {

  @Input()
  public temperature: ITemperature;

}
