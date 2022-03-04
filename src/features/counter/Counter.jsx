import React from "react";
import styles from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { incremented, decremented } from "./counterSlice";

export function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  function handleDecrement() {
    dispatch(decremented());
  }

  function handleIncrement() {
    dispatch(incremented());
  }

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={handleDecrement}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
}
