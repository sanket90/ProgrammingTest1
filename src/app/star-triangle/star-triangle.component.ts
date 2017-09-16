import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-triangle',
  templateUrl: './star-triangle.component.html',
  styleUrls: ['./star-triangle.component.css']
})
export class StarTriangleComponent {
  @Input() n : any;
}
