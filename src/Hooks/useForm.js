import React, { useState } from "react";

export const useForm = (initalValue = {}) => {
  // le paso un valor
  const [formState, setFormState] = useState(initalValue); //useState

  const onInputChange = ({ target }) => {
    //le paso un valor

    const { value, name, password } = target; //extraigo los valores de value,
    //name//password

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const onResetForm = () => {
    setFormState(initalValue);
  };

  return {
    ...formState, // devuelvo todos los valores iniciales desestruturado
    formState, //tambien el completo
    onInputChange,
    onResetForm,
  };
};
