import { useState } from "react";

export const FormSimple = () => {
  const [form, setForm] = useState({
    nombre: "Neil",
    correo: "google@gmail.com",
  });

  const mutarValor = (event) => {
    setForm({
      nombre: event.target.value,
    });
  };
  const { nombre, correo } = form;
  return (
    <>
      <input
        type="text"
        placeholder="Nombres"
        value={nombre}
        onChange={mutarValor}
      />
      <input type="email" placeholder="google@gmail.com" value={correo} />

      <div>simpleform2</div>
    </>
  );
};
