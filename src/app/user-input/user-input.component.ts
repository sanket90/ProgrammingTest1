import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  num : number;
  onSubmitEventEmitter = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {}

  onSubmit() {
    if (!this.num || this.num<=0) return
    
    this.onSubmitEventEmitter.next(this.num)
  }
}
