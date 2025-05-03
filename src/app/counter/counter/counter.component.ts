import { Component } from '@angular/core';
import { CounterButtonComponent } from '../counter-button/counter-button.component';
import { CounterOutputComponent } from '../counter-output/counter-output.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  imports: [CounterButtonComponent,CounterOutputComponent,CommonModule,FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  incrementalValue : number = 0;
}
