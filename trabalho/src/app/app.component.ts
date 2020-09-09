import { Component, OnInit } from '@angular/core';
import { InsertSort } from "./insert-sort";
import { QuickSort } from "./quick-sort";
import { FormGroup, FormBuilder } from '@angular/forms';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public time: number;
  public formTest: FormGroup;
<<<<<<< HEAD
  public array: number[] = [];

  public tamanhoArry = [
    {value: 100000, text:'100.000'},
    {value: 500000, text:'500.000'},
    {value: 1000000, text:'1.000.000'}
  ];

=======
  public array: number[] = []

  public tamanhoArry = [
    { value: 100000, text: '100.000' },
    { value: 500000, text: '500.000' },
    { value: 1000000, text: '1.000.000' }
  ]
>>>>>>> 930d5a57ec9c2be32aec2692333f68a3503b4966
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.build()
  }

  public build() {
    this.formTest = this.formBuilder.group({
      tamanho: [''],
    })
  }

  geradorNumerico() {
    for (let i: number = 0; i < this.formTest.get('tamanho').value; i++) {
      this.array[i] = Math.floor(Math.random() * 200000 + 1);
    }
    this.tests()
  }

  tempoDecorrido(funcao) {
    var args = Array.prototype.slice.call(arguments, 1);
    var inicio = performance.now();
    funcao.apply(null, args);
    return (performance.now() - inicio) / 1000;
  }


  public test() {
    this.time = this.tempoDecorrido(this.insertSort)
  }


  public insertSort() {
    let arry: number[] = [];

    for (let i = 0; i < 1000000; i++) {
      arry[i] = Math.floor(Math.random() * 1000000) + 1;
    }

    console.log('Desordenado:', arry);

    let sorter: InsertSort = new InsertSort();
    let dummyarray = sorter.sort(arry);
    console.log("Array Ordenado", dummyarray);
  }

  public quickSort() {
    let arry: number[] = [];

    for (let i = 0; i < 1000000; i++) {
      arry[i] = Math.floor(Math.random() * 1000000) + 1;
    }

    console.log('Desordenado', arry);

    let sorter: QuickSort = new QuickSort();
    sorter.sort(arry);

    console.log('Array Ordenado', arry);
  }

  tests() {
    let blob: any = new Blob([this.array.toString()], {
      type: "text/txt; charset=utf-8",
    });
    saveAs.saveAs(blob, "relatorio_produtores.txt");
  }

}
