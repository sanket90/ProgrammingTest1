import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { StarTriangleComponent } from './star-triangle/star-triangle.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    FibonacciComponent,
    StarTriangleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
