import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css',
})
export class ChildComponent {
  @Output() data= new EventEmitter<String>;

  emitValue(){
    this.data.emit("Testing child component value")
  }
}
