import {Component} from '@angular/core';
@Component({
  templateUrl:'./hero.component.html',
  styleUrls:['./hero.component.css']
})
export class HeroComponent{
  title: string;
  myHero: string;

  constructor() {
    this.title = 'Tour of Heroes';
    this.myHero = 'Windstorm';
  }
}