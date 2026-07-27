import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-learn-forms',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './learn-forms.html',
  styleUrl: './learn-forms.css',
})
export class LearnForms {
  username:String="";
  loginform = new FormGroup({
    username: new FormControl(''),
    email: new FormControl('')
  })
submit(){
  console.log(this.loginform);
}
testForm: FormGroup;
constructor(public fb:FormBuilder)
{
  this.testForm=this.fb.group({
    username:['',[Validators.required, Validators.minLength(3)]],
    password:['',[Validators.required, Validators.minLength(3)]]
  })
}
}
