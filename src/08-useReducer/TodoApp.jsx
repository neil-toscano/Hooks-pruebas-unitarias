import React, { useEffect, useReducer, useRef, useState } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";
export const TodoApp = () => {
  const [first, setfirst] = useState("");

  const refGet = useRef();

  const initialState = [];
  const init = () => {
    return JSON.parse(localStorage.getItem("todos") || []);
  };

  const [todo, dispatch] = useReducer(todoReducer, initialState, init);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  const handleTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: id,
    };
    dispatch(action);
  };
  const handleToggleTodo = (id) => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: id,
    };
    dispatch(action);
  };

  console.log(todo);

  return (
    <>
      <h1>
        TodoApp:10 <small>Pendientes:2</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            initialState={todo}
            onToggleTodo={handleToggleTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TD</h4>
          <hr />
          <TodoForm onNewTodo={handleTodo} />
        </div>
      </div>
    </>
  );
};
