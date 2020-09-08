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
  public array = [1,123,123,123,123,123,2,3434,5,342,4]

  public time: number

  constructor(
    //private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildForm()
  }

  public buildForm() {

  }

  public test() {
    console.log('soifhsoidfj')
    console.log(this.array.length)

    this.time = this.tempoDecorrido(this.minhaFuncao);
  }

  tempoDecorrido(funcao) {
    var args = Array.prototype.slice.call(arguments, 1);
    var inicio = performance.now();
    funcao.apply(null, args);
    return performance.now() - inicio;
  }

  minhaFuncao(x) {
    for (var i = x; i < x + 10; i++) console.log(i);
  }

  geradorNumerico(){
    
  }

}
