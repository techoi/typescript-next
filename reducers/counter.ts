import { ICounterState, IReducerAction } from "../interfaces";

const initialState: ICounterState = {
    count: 0
};

export const INCREASE = 'counter/INCREASE' as const;
export const DECREASE = 'counter/DECREASE' as const;
export const INCREASE_BY = 'counter/INCREASE_BY' as const;
export const INCREASE_BY_SUCCESS = 'counter/INCREASE_BY_SUCCESS' as const;

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseByRequest = (diff: number) => ({
    type: INCREASE_BY,
    value: diff,
});

function counter(state: ICounterState = initialState, action: IReducerAction) {
    switch (action.type) {
        case INCREASE:
            return { count: state.count + 1 };
        case DECREASE:
            return { count: state.count - 1 };
        case INCREASE_BY_SUCCESS:
            return { count: state.count + action.payload };
        default:
            return state;
    }
}

export default counter;