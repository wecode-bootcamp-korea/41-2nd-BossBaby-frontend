import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../../redux/slices/counterSlice';

const Mypage = () => {
  const count = useSelector(state => state.counter.value);
  const dipatch = useDispatch();

  const onIncrease = () => {
    dipatch(increase());
  };
  const onDecrease = () => {
    dipatch(decrease());
  };

  return (
    <div>
      <span>{count}</span>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default Mypage;
