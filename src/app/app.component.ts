import { Component } from '@angular/core';
import { Temperature } from './temperature-card/temperature-card.component';
import { Profile } from './profile/profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'Hot Weather Widget';
  
  public temperature: Temperature;
  
  public resort = {
    menu: [
      { title: 'Отели', handler: this.loadResortData.bind(this, 'hotel') },
      { title: 'Рыбалка', handler: this.loadResortData.bind(this, 'fishing') },
      { title: 'Туры', handler: this.loadResortData.bind(this, 'tours') },
      { title: 'Погода', handler: this.loadResortData.bind(this, 'weather') }
    ],
    items: [],
    loading: false
  }

  public profile: Profile = {
    followers: 20,
    following: 1,
    title: 'Какое-то название'
  };

  constructor() {
    setTimeout(() => {
      this.temperature = {
        place: 'London',
        degrees: 30,
        water: 20
      }
    }, 3000);
  }

  loadResortData(type) {

    const shuffle = arr => arr.sort(() => 0.5 - Math.random());

    const data = {
      hotel: [
        {
          title: 'Отель какое-то название',
          subtitle: 'Подзаголовок',
          description: shuffle(`Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Sapiente ipsa quam,
            doloremque sit eaque. Provident nisi deleniti nulla,
            officia illo? Hic minus voluptas, eveniet aspernatur!
            Vel recusandae, temporibus nobis nihil.`.split(' ')).join(' '),
          photos: ['1.jpg', '2.jpg', '3.jpg'],
          phone: '8 (924) 234-23-43'
        },
        {
          title: 'Отель',
          subtitle: 'Подзаголовок',
          description: shuffle(`Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Sapiente ipsa quam,
            doloremque sit eaque. Provident nisi deleniti nulla,
            officia illo? Hic minus voluptas, eveniet aspernatur!
            Vel recusandae, temporibus nobis nihil.`.split(' ')).join(' '),
          photos: ['4.jpeg'],
          phone: '8 (944) 234-13-56'
        },
        {
          title: 'Отель 2',
          subtitle: 'Подзаголовок',
          description: shuffle(`Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Sapiente ipsa quam,
            doloremque sit eaque. Provident nisi deleniti nulla,
            officia illo? Hic minus voluptas, eveniet aspernatur!
            Vel recusandae, temporibus nobis nihil.`.split(' ')).join(' '),
          phone: '8 (985) 123-54-43'
        }
      ],
      fishing: [],
      tours: [
        {
          title: 'Тур',
          subtitle: '',
          description: "Еще один тур",
          photos: ['2.jpg', '5.jpg'],
          phone: '8 234 234-33-22'
        }
      ],
      weather: []
    }

    this.resort.loading = true;
    setTimeout(() => {
      this.resort.items = data[type];
      this.resort.loading = false;
    }, 2000);
  }

  public onSubscribe(eventArgs) {
    console.log(eventArgs);
  }
}
