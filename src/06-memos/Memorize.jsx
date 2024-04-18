import React, { useState } from "react";
import { UseCounter } from "../Hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, decrement, increment } = UseCounter(1);
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
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
