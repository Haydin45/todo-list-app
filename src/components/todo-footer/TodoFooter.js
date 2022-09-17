import React from "react";
import { useTodo } from "../../contexts/todo/TodoContext";

const TodoFooter = () => {
  const { filtered, isLoading, filter, setFilter, removeTodo } = useTodo();

  const removeAllTodo = async () => {
    for (const todo of filtered) {
      if (todo.isCompleted === true) {
        await removeTodo(todo.id);
      }
    }
  };

  return (
    <div className="todoFooter">
      <span>
        {filtered.length} todo{filtered.length > 1 && "s"} left
      </span>
      <div>
        <button
          className={`${filter === -1 && "focusedFilter"} btnFilter`}
          onClick={() => setFilter(-1)}
        >
          All
        </button>
        <button
          className={`${filter === 0 && "focusedFilter"} btnFilter`}
          onClick={() => setFilter(0)}
        >
          Active
        </button>
        <button
          className={`${filter === 1 && "focusedFilter"} btnFilter`}
          onClick={() => setFilter(1)}
        >
          Completed
        </button>
      </div>

      <button
        className={
          filtered.some((todo) => todo.isCompleted)
            ? "hasCompleted"
            : "noCompleted"
        }
        onClick={() => removeAllTodo()}
        disabled={isLoading}
      >
        Clear completed
      </button>
    </div>
  );
};

export default TodoFooter;
