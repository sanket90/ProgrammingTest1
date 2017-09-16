import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnChanges {

  constructor() { }

  @Input() n : number;
  fib : any

  ngOnChanges() { this.fib = this.calcFibonacciSeries(this.n)}

  private calcFibonacciSeries(num) {
    let series = [];
    for (let i=0; i<num; i++) {
      if (i < 2) series[i]=1
      else series[i]= series[i-1] + series[i-2]
    }
    return series
  }

}
