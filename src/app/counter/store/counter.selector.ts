import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CounterState, STATE_COUNTER } from '../../store';
export const selectCounterState = createFeatureSelector<any>(STATE_COUNTER);

export const selectCounterValue = createSelector(
    selectCounterState,
    (state: CounterState) =>  state.count
    
);