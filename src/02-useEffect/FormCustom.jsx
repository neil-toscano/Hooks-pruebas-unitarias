import React, { useEffect, useState } from "react";
import { Message } from "./Message";
import { useForm } from "../Hooks/useForm";
export const SimpleHook = () => {
  const [formState, onInputChange, onResetForm] = useForm({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formState;
  useEffect(() => {
    console.log("use effect called");
  }, [formState.email]);

  return (
    <>
      <h1>Formulario con custom Hook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="neil@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder=""
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button onClick={onResetForm} className="btn btn-primary">
        Enviar
      </button>
      {username === "strider2" && <Message />}
    </>
  );
};
