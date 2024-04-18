import { UseCounter } from "../Hooks/useCounter";

export const CounterCustomHook = () => {
  const { counter, decrement, reset, increment } = UseCounter();
  return (
    <>
      <h1>Counter with hook: {counter}</h1>
      <button className="btn btn-primary" onClick={() => increment(5)}>
        +1
      </button>
      <button className="btn btn-secondary" onClick={() => reset()}>
        reset
      </button>
      <button className="btn btn-warning" onClick={() => decrement(2)}>
        -1
      </button>
    </>
  );
};
