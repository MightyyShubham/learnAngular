import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-control-component',
  imports: [CommonModule],
  templateUrl: './control-component.html',
  styleUrl: './control-component.css',
})
export class ControlComponent {
  toggleVal=true;

  toggle(){
    this.toggleVal=!this.toggleVal;
  }

  items=[1,2,3,4,5,6,7,8,9]
}
