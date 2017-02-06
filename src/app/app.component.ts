import { Component } from '@angular/core';
import { ITemperature } from './models/ITemperature';
import { IProfile } from './models/IProfile';
import { IResort } from './models/IResort';

import resorts from './seeds/resorts';
import temperature from './seeds/temperature';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'Hot Weather Widget';
  
  public temperature: ITemperature;
  
  public resort: IResort = {
    menu: [
      { title: 'Отели', handler: this.loadResortData.bind(this, 'hotel') },
      { title: 'Рыбалка', handler: this.loadResortData.bind(this, 'fishing') },
      { title: 'Туры', handler: this.loadResortData.bind(this, 'tours') },
      { title: 'Погода', handler: this.loadResortData.bind(this, 'weather') }
    ],
    items: [],
    loading: false
  }

  public profile: IProfile = {
    followers: 20,
    following: 1,
    title: 'Какое-то название'
  };

  constructor() {
    setTimeout(() => {
      this.temperature = temperature;
    }, 3000);
  }

  loadResortData(type) {

    const data = resorts;

    this.resort.loading = true;
    setTimeout(() => {
      this.resort.items = data[type];
      this.resort.loading = false;
    }, 2000);
  }

  public onSubscribe(eventArgs) {
    this.profile.followers++;
  }
}
