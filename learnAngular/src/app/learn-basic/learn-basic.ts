import { Component } from '@angular/core';
import { AsyncPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { customComponent } from './custom-component/custom';
import { ParentComponent } from './parent-component/parent-component';
import { ControlComponent } from './control-component/control-component';
import { GreetingsPipe } from './greetings-pipe';
import { BasicService } from './basic-service';

@Component({
  selector: 'app-learn-basic',
  imports: [customComponent, ParentComponent, ControlComponent, GreetingsPipe, UpperCasePipe, SlicePipe, AsyncPipe],
  templateUrl: './learn-basic.html',
  styleUrl: './learn-basic.css',
  standalone: true,
})
export class LearnBasic {
  users$: Observable<any[]>;

  constructor(private service: BasicService) {
    this.users$ = this.service.getUsers();
  }
}
