import { Component, Input } from '@angular/core';

@Component({
  selector: 'resort-card',
  templateUrl: './resort-card.component.html',
  styleUrls: ['./resort-card.component.scss']
})
export class ResortCardComponent {

  public bigImage = '/AngularCourseHomeWork1/assets/images/4.jpeg'; 

  @Input('resort')
  public data;

  public showImg(event) {
    this.bigImage = event.target.src;
  }
}
