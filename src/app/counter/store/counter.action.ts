import { createAction, props } from '@ngrx/store';

export const increment = createAction('Count Increment');
export const decrement = createAction('Counter Decrement');
export const reset = createAction('Counter Reset');
export const stepIncrement = createAction('Counterstepincrement',props<{step : number}>());