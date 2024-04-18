import { CounterApp } from "./01-useState/CounterApp";
import { CounterCustomHook } from "./01-useState/counterCustomHook";

export const App1 = () => {
  return (
    <div>
      <CounterApp />
      <CounterCustomHook />
    </div>
  );
};
