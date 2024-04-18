import React, { useRef } from "react";

export const FocusScreen = () => {
  const Inputref = useRef();
  const handleClick = () => {
    Inputref.current.focus();
  };
  return (
    <>
      <div>FocusScreen</div>
      <input type="text" ref={Inputref} className="form-control" />
      <button onClick={handleClick} className="btn btn-primary">
        Set focus
      </button>
    </>
  );
};
