// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-quick-sort',
//   templateUrl: './quick-sort.component.html',
//   styleUrls: ['./quick-sort.component.scss']
// })
// export class QuickSortComponent implements OnInit {
//
//   private arr: number[];
//
//   constructor() { }
//   /**
//    * Starts the soring process.
//    *
//    * @method sort
//    * @param {Array} arry The array to be sorted.
//    */
//
//   public sort(arry: number[]): void {
//     if (arry !== undefined) {
//       this.arr = arry;
//       this.quicksort(0, this.arr.length - 1);
//     }
//   }
//
//   public swap(i: number, j: number): void {
//     let temp: number = this.arr[i];
//     this.arr[i] = this.arr[j];
//     this.arr[j] = temp;
//   }
//
//   public quicksort(low: number, high: number): void {
//     let i: number = low;
//     let j: number = high;
//     let pivot: number = this.arr[Math.floor((low + high) / 2)];
//
//     while (i <= j) {
//
//       while (this.arr[i] < pivot) {
//         i++;
//       }
//
//       while (this.arr[j] > pivot) {
//         j--;
//       }
//
//       if (i <= j) {
//         this.swap(i, j);
//         i++;
//         j--;
//       }
//     }
//
//     if (low < j) {
//       this.quicksort(low, j);
//     }
//     if (i < high) {
//       this.quicksort(i, high);
//     }
//   }
//
//
//   ngOnInit(): void {
//   }
//
// }
