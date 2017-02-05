import { Component, OnInit, Input } from '@angular/core';

export type Temperature = {
  degrees: number,
  water: number,
  place: string
};

@Component({
  selector: 'temperature-card',
  templateUrl: './temperature-card.component.html',
  styleUrls: ['./temperature-card.component.scss']
})
export class TemperatureCardComponent {

  @Input()
  public temperature: Temperature;

}
