import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCounterValue } from '../store/counter.selector';
import { CounterState } from '../../store';


@Component({
  selector: 'app-counter-output',
  imports: [CommonModule],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.scss'
})
export class CounterOutputComponent {

  $count: Observable<any>;
  constructor(private store: Store<CounterState>) {
    this.$count = this.store.select(selectCounterValue);
  }
}
