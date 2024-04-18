import { useState } from "react";

export const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 1,
    counter2: 2,
  });
  const { counter1, counter2 } = counter;
  return (
    <>
      <h1>Counter:{counter1}</h1>
      <h1>Counter:{counter2}</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => setCounter({ ...counter, counter1: counter1 + 1 })}
      >
        +1
      </button>
    </>
  );
};
