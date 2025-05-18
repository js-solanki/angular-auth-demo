import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset, stepIncrement } from './counter.action';
import { CounterState, initialCounterState } from '../../store';

export const initialState: CounterState = initialCounterState;

export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => {
        return {
            ...state,
            count: state.count + 1
        }
    }
    ),
    on(decrement, (state) => {
        return {
            ...state,
            count: state.count - 1
        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            count: 0
        }
    }),
    on(stepIncrement, (state, action) => {
        return {
            ...state,
            count: state.count + action.step
        }
    }),

);