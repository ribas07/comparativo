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
  public timeInsertSort: number;
  public timeQuickSort: number
  public formTest: FormGroup;
  public array: number[] = [];
  public arquivo: any
  public conteudo: number[] = []

  public test = false

  public tamanhoArry = [
    { value: 100000, text: '100.000' },
    { value: 500000, text: '500.000' },
    { value: 1000000, text: '1.000.000' },
    { value: 2000000, text: '2.000.000' },
    { value: 5000000, text: '5.000.000' },
    { value: 10000000, text: '10.000.000' }
  ]
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

  arquivoSelecionado(fileInput) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      this.arquivo = fileInput.target.files[0];
    }
  }

  async obterConteudo() {
    const test = await this.obterConteudoDoArquivo(this.arquivo)

    var arrayOfStrings = test.split(',');
    for (let i = 0; i < arrayOfStrings.length; i++) {
      this.conteudo[i] = parseInt(arrayOfStrings[i])
    }
    alert("Arquivo Processado!");
  }

  obterConteudoDoArquivo(file): Promise<string> {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener('load', (event) => {
        resolve(<string>event.target.result);
      });
      reader.readAsText(file);
    })
  }


  public buttonInsertSort() {
    this.timeInsertSort = this.tempoDecorrido(this.insertSort);
  }

  public buttonQuickSort() {
    this.timeQuickSort = this.tempoDecorrido(this.quickSort)
  }




  tempoDecorrido(funcao) {
    var inicio = performance.now();
    funcao(this.conteudo);
    return (performance.now() - inicio) / 1000;
  }

  public insertSort(array: number[]) {
    let sorter: InsertSort = new InsertSort();
    sorter.sortComponent(array);
  }

  public quickSort(array: number[]) {
    let sorter: QuickSort = new QuickSort();
    sorter.sort(array);
  }




  public geradorNumericoAleatorio() {
    for (let i: number = 0; i < this.formTest.get('tamanho').value; i++) {
      this.array[i] = Math.floor(Math.random() * 200000 + 1);
    }
    let nameArquivo = 'ArquivoAleatorio-' + this.formTest.get('tamanho').value + ".txt"
    this.geradorDeArquivo(nameArquivo)
  }

  public geradorNumericoOrdenado() {
    for (let i: number = 0; i < this.formTest.get('tamanho').value; i++) {
      this.array[i] = Math.floor(100000 + i * 2 + 1);
    }
    let nameArquivo = 'ArquivoOrdenado-' + this.formTest.get('tamanho').value + ".txt";
    this.geradorDeArquivo(nameArquivo)

  }

  public geradorDeArquivo(nameArquivo) {
    let blob: any = new Blob([this.array.toString()], {
      type: "text/txt; charset=utf-8",
    });
    saveAs.saveAs(blob, nameArquivo);
    this.array = [];
  }

}
