import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {

  num : number;
  @Output() onSubmitEventEmitter = new EventEmitter<number>()

  constructor() { }

  onSubmit() {
    if (!this.num || this.num<=0) return
    
    this.onSubmitEventEmitter.next(this.num)
  }
}
