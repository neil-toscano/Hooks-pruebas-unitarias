import React from "react";
import { useForm } from "../Hooks/useForm";

export const TodoForm = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.length <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description,
    };
    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="TODO"
          className="form-control"
          name="description"
          value={description}
          onChange={onInputChange}
        />
        <button type="submit " className="btn btn-outline-primary">
          Agregar
        </button>
      </form>
    </>
  );
};
