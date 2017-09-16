import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-star-triangle',
  templateUrl: './star-triangle.component.html',
  styleUrls: ['./star-triangle.component.css']
})
export class StarTriangleComponent implements OnInit, OnChanges {

  @Input() n : any;
  star : any;

  ngOnInit() { this.star = this.generateStarTriangle(this.n) }

  ngOnChanges() { this.star = this.generateStarTriangle(this.n) }
  
  private generateStarTriangle(num) {
    let rows = []
    for (let i=0; i<num; i++) {
      let columns = []
      for (let j=0; j<=i; j++) {
        columns[j] = "* "
      }
      rows[i] = columns
    }
    return rows;
  }
}
