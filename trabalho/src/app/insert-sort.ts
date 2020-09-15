import {Injectable, OnInit} from '@angular/core';

@Injectable()
export class InsertSort implements OnInit {

  constructor() { }

  public sortComponent(arr:number[]):number[]{

    if (arr!==undefined) {
      for(let i:number = 0; i< arr.length; i++){

        let j = i-1;
        let key = arr[i];

        while(j>-1 && arr[j]>key){
          arr[j+1] = arr[j];
          j--;
        }

        arr[j+1] = key;

      }
      return arr;
    }

  }

  ngOnInit(): void {
  }

}
