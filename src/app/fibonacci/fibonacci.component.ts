import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit, OnChanges {
  @Input() n : number;
  fib : any

  ngOnInit() { this.fib = this.generateFibonacciSeries(this.n) }
  
  ngOnChanges() { this.fib = this.generateFibonacciSeries(this.n) }

  private generateFibonacciSeries(num) {
    let series = [];
    for (let i=0; i<num; i++) {
      if (i < 2) series[i]=1
      else series[i]= series[i-1] + series[i-2]
    }
    return series
  }

}
