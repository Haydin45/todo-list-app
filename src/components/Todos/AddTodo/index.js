import React, { useState } from "react";

const AddTodo = ({ todos, setTodos }) => {
  const [todoName, setTodoName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (todoName !== "") {
      setTodos([...todos, { todoName: todoName, isActive: true }]);
      setTodoName("");
    }
  };

  const changeAllTodo = () => {
    const hasActiveTodo = todos.some((todo) => todo.isActive === true);

    setTodos(todos.map((todo) => ({ ...todo, isActive: !hasActiveTodo })));
  };

  return (
    <div className="addTodo">
      <button id="btnAdd" onClick={() => changeAllTodo()}>
        <i className="fa-solid fa-chevron-down"></i>
      </button>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
      </form>
    </div>
  );
};

export default AddTodo;
