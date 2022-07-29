import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";

const TodoFooter = ({ todos, setTodos }) => {
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setFiltered([...todos]);
  }, [todos]);

  const hasCompletedTodo = filtered.some((todo) => !todo.isActive);

  const filterList = (active) => {
    setFiltered(
      active === -1
        ? [...todos]
        : todos.filter((todo) => todo.isActive !== !!active)
    );
  };

  const clearCompleted = () => setTodos(todos.filter((todo) => todo.isActive));

  return (
    <div className="todoBody">
      <TodoList todos={filtered} setTodos={setTodos} />
      <div className="todoFooter">
        <span>
          {todos.length} item{todos.length > 1 && "s"} left
        </span>
        <div>
          <button className="btnFilter" onClick={() => filterList(-1)}>
            All
          </button>
          <button className="btnFilter" onClick={() => filterList(0)}>
            Active
          </button>
          <button className="btnFilter" onClick={() => filterList(1)}>
            Completed
          </button>
        </div>

        <button
          className={hasCompletedTodo ? "hasCompleted" : "noCompleted"}
          onClick={clearCompleted}
        >
          Clear completed
        </button>
      </div>
    </div>
  );
};

export default TodoFooter;
