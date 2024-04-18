import { useState } from "react";

export const UseCounter = (initValue = 10) => {
  const [counter, setCounter] = useState(initValue);
  const increment = (valor = 1) => {
    setCounter(counter + valor);
  };
  const decrement = (valor = 2) => {
    setCounter(counter - valor);
  };
  const reset = () => {
    setCounter(initValue);
  };

  return { counter, decrement, reset, increment };
};
