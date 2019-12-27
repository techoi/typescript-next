import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as counterAction from '../reducers/counter';
import Counter from '../components/Counter';
import { IReducerStates } from '../interfaces';

function CounterContainer() {
  const count = useSelector((state: IReducerStates) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(counterAction.increase());
  };

  const onDecrease = () => {
    dispatch(counterAction.decrease());
  };

  const onIncreaseBy = (diff: number) => {
    dispatch(counterAction.increaseByRequest(diff));
  };

  return (
    <Counter
      count={count}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
    />
  );
}

export default CounterContainer;