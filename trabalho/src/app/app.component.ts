import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public formLogin: FormGroup;
  public array = environment.test;

  public time 
  
  constructor(
    //private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildForm()
  }

  public buildForm() {
    
  }

  public test(){
    console.log('soifhsoidfj')
    console.log(this.array.length)
    

  }

}
