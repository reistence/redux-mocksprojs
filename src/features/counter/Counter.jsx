import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);
  const addValue = Number(amount) || 0;

  const resetAll = () => {
    setAmount(0);
    dispatch(reset());
  };

  return (
    <div>
      <p style={{ fontSize: "10em", margin: 0 }}>{count}</p>
      <div className="">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        onKeyUp={(Enter) => dispatch(incrementByAmount(addValue))}
        // onKeyDown={(BackSpace) => dispatch(decrementByAmount(addValue))}
      />
      <div className="">
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </button>
        <button onClick={() => dispatch(decrementByAmount(addValue))}>
          Dec Amount
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
