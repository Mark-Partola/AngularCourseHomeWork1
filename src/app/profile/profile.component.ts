import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProfile } from '../models/IProfile';

@Component({
  selector: 'profile-card',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  public followers: number = 0;
  public following: number = 0;
  public title: string;

  @Input()
  public set profile (profile: IProfile) {
    this.followers = profile.followers || 0,
    this.following = profile.following || 0
    this.title = profile.title
  }

  @Output()
  public onSubscribe = new EventEmitter<{id: string}>();

  public subscribe() {
    this.onSubscribe.next({
      id: this.title
    });
  }

}
