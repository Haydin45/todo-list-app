import React, { useState } from "react";
import { useTodo } from "../../contexts/todo/TodoContext";

const AddTodo = () => {
  const { filtered, isLoading, addTodo, changeTodo } = useTodo();
  const [todoName, setTodoName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (todoName.trimEnd().length >= 3) {
      addTodo(todoName.trimEnd());
      setTodoName("");
    }
  };

  const changeAllTodo = async () => {
    const hasActiveTodo = filtered.some((todo) => todo.isCompleted === true);

    for (const todo of filtered) {
      if (todo.isCompleted === hasActiveTodo) {
        await changeTodo({ ...todo, isCompleted: !hasActiveTodo });
      }
    }
  };

  return (
    <div className="addTodo">
      <button id="btnAdd" onClick={() => changeAllTodo()} disabled={isLoading}>
        <i className="fa-solid fa-chevron-down"></i>
      </button>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder={isLoading ? "Loading..." : "What needs to be done?"}
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          disabled={isLoading}
        />
      </form>
    </div>
  );
};

export default AddTodo;
