// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-insert-sort',
//   templateUrl: './insert-sort.component.html',
//   styleUrls: ['./insert-sort.component.scss']
// })
// export class InsertSortComponent implements OnInit {
//
//   constructor() { }
//
//   public sort1(arr:number[]):number[]{
//
//     if(arr!==undefined){
//       for(let i:number = 0; i< arr.length; i++){
//
//         let j = i-1;
//         let key = arr[i];
//
//         while(j>-1 && arr[j]>key){
//           arr[j+1] = arr[j];
//           j--;
//         }
//
//         arr[j+1] = key;
//
//       }
//       return arr;
//     }
//
//   }
//
//   ngOnInit(): void {
//   }
//
// }
