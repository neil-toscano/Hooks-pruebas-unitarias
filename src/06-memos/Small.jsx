import React from "react";
import { memo } from "react";
export const Small = memo(({ value = 1 }) => {
  console.log("me volvi a dibujar");
  return (
    <>
      <small>{value}</small>
      <div>Small</div>
    </>
  );
});
