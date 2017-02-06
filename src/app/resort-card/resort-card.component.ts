import { Component, Input } from '@angular/core';
import { IResort } from '../models/IResort';

@Component({
  selector: 'resort-card',
  templateUrl: './resort-card.component.html',
  styleUrls: ['./resort-card.component.scss']
})
export class ResortCardComponent {

  public bigImage = '/AngularCourseHomeWork1/assets/images/1.jpg'; 

  @Input('resort')
  public data: IResort;

  public showImg(event) {
    this.bigImage = event.target.src;
  }
}
