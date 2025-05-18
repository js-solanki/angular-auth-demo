import { createSelector, createFeatureSelector } from '@ngrx/store';
import { postState } from '../../store';

export const selectPostState = createFeatureSelector<any>('post');

export const selectPostValue = createSelector(
    selectPostState,
    (state: postState) =>  { 
        return state}
);