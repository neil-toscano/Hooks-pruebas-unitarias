import React, { useMemo, useState } from "react";
import { UseCounter } from "../Hooks/useCounter";
import { Small } from "./Small";
const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("vamos...");
  }
  return `${iterationNumber} iteraciones`;
};
export const UseMemo = () => {
  const { counter, decrement, increment } = UseCounter(1);
  const [show, setShow] = useState(true);
  const mensaje = useMemo(() => heavyStuff(counter), [counter]);
  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <h4>{mensaje}</h4>
      <div>Memorize</div>
      <button className="btn btn-primary" onClick={() => increment(2)}>
        Click
      </button>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {JSON.stringify(show)}
      </button>
    </>
  );
};
