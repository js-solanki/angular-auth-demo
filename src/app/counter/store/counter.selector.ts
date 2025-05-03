import { createSelector, createFeatureSelector } from '@ngrx/store';
import { counterState } from '../../constant/state';

export const selectCounterState = createFeatureSelector<any>('counter');

export const selectCounterValue = createSelector(
    selectCounterState,
    (state: counterState) =>  state.count
    
);