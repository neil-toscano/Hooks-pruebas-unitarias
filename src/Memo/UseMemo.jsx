import React, { useCallback, useState } from "react";
import { ChildComponent } from "./HijoComponent";

export function ParentComponent() {
  const [num, setNum] = useState(0);
  const handleClick = useCallback(
    () => setNum((num) => num + 1),
    // Lógica de la función handleClick
    [],
  ); // No hay dependencias

  return (
    <>
      <div>
        <ChildComponent onClick={handleClick} />
      </div>
      {num}
    </>
  );
}
