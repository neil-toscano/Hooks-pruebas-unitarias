import { useEffect, useState } from "react";

export const Message = () => {
  const [cors, setcors] = useState({ x: 2, y: 3 });
  let x1 = 5;
  let y1 = 2;

  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      const cords = { x, y };
      console.log(cords);
      setcors({ x, y });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      <h2>{cors.x}</h2>
      <h2>{cors.y}</h2>
    </>
  );
};
