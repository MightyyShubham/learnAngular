import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LearnBasic } from './learn-basic/learn-basic';
import { LearnForms } from './learn-forms/learn-forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LearnBasic,LearnForms],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learnAngular');
  learningPath:any=[{
    title:"Beginner", routeTo:"learnBasic",
  },
  {
    title:"Forms",routeTo:"learnForms",
  },
  {
    title:"Routes",routeTo:"learnRouting",
  },
  
  {
    title:"Core Deep Drive",routeTo:"learnCore",
  },
  {
    title:"RXJS",routeTo:"learnRxjs",
  },
  {
    title:"Signals",routeTo:"learnSignals",
  },
  {
    title:"NgRX",routeTo:"learnNgrx",
  },
  {
    title:"Material",routeTo:"learnMaterial",
  },
  {
    title:"TypeScript",routeTo:"learnMaterial",
  },
  {
    title:"NextJS",routeTo:"learnMaterial",
  },
  {
    title:"Angular Progressive Web Apps",routeTo:"learnRouting",
  },
  {
    title:"Angular Security ",routeTo:"learnRouting",
  },
  {
    title:"Firebase & AngularFire ",routeTo:"learnRouting",
  },
  {
    title:"Stripe Payments In Practice ",routeTo:"learnRouting",
  },
  ]
  selectedItem="";
  itemClicked(item:any){
    this.selectedItem=item.routeTo;
  }
}
