import { memo } from "react";
export const ChildComponent = memo(({ onClick }) => {
  console.log("hola1");
  return <button onClick={onClick}>Click me</button>;
});
