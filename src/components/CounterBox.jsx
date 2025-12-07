import { useState } from "react";

const CounterBox = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const reset = () => setCount(0);

  return (
    <div className="counter-box">
      <div className="counter-display">{count}</div>

      <div className="btn-group">
        <button className="btn inc" onClick={increment}>
          + Increment
        </button>

        <button className="btn dec" onClick={decrement} disabled={count === 0}>
          – Decrement
        </button>

        <button className="btn reset" onClick={reset}>
          Reset
        </button>
      </div>

      {count === 0 && (
        <p className="warning">Counter can’t go below 0 — Decrement Disabled!</p>
      )}
    </div>
  );
};

export default CounterBox;
