import { Component } from '@angular/core';
import { InsertSort } from "./insert-sort";
import { QuickSort } from "./quick-sort";
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

    this.time = this.tempoDecorrido(this.quickSort);
  }

  tempoDecorrido(funcao) {
    var args = Array.prototype.slice.call(arguments, 1);
    var inicio = performance.now();
    funcao.apply(null, args);
    return (performance.now() - inicio) / 1000;
  }

  minhaFuncao(x) {
    for (var i = x; i < x + 10; i++) console.log(i);
  }

  geradorNumerico(){

  }

  public insertSort () {
    let sorter:InsertSort = new InsertSort();
    let dummyarray:number[] = [];

    for(let i:number=0; i<200001; i++){

      dummyarray[i] = Math.floor(Math.random()*200000+1);

    }

    console.log("Unsorted Array", dummyarray);

    dummyarray = sorter.sort(dummyarray);

    console.log("Sorted Array", dummyarray);
  }

  public quickSort() {
    let arry:number[] = [];

    for(let i = 0; i<1000000; i++){
      arry[i] =Math.floor(Math.random() * 1000000) + 1;
    }

    console.log('Unsorted',arry);

    let sorter:QuickSort = new QuickSort();
    sorter.sort(arry);

    console.log('Sorted',arry);
  }

}
