import { createAction, props } from '@ngrx/store';

export const INCREMENT_ACTION = "Count Increment";
export const DESCREMENT_ACTION = "Counter Decrement";
export const RESET_ACTION = "Counter Reset";
export const STEP_INCREMENT_ACTION = "Counterstepincrement";

export const increment = createAction(INCREMENT_ACTION);
export const decrement = createAction(DESCREMENT_ACTION);
export const reset = createAction(RESET_ACTION);
export const stepIncrement = createAction(STEP_INCREMENT_ACTION,props<{step : number}>());