import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset, stepIncrement } from '../store/counter.action';

@Component({
  selector: 'app-counter-button',
  imports: [MatButton],
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.scss'
})
export class CounterButtonComponent {

  @Input() incrementalValue : number = 0;
  @Output() incrementalValueChange = new EventEmitter<any>();

  constructor(private store: Store<{ count: number }> ) {
    }

  incrementCounter() {

    this.store.dispatch(increment());
  }

  decrementCounter() {
    this.store.dispatch(decrement());

  }

  resetCounter() {
    this.store.dispatch(reset());
  }

  inputIncrementCounter(){
    this.store.dispatch(stepIncrement({step:this.incrementalValue}))
  }

}
