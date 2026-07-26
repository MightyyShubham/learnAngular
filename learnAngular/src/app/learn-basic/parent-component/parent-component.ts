import { Component, Input } from '@angular/core';
import { ChildComponent } from '../child-component/child-component';

@Component({
  selector: 'app-parent-component',
  imports: [ChildComponent],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.css',
})
export class ParentComponent {
  data1="without input value"
  @Input() data:string="";
  
  emitted(val:any){
this.data1=val;
  }
}
