import React from "react";
import { useTodo } from "../../contexts/todo/TodoContext";
import TodoRow from "../todo-row/TodoRow";

const TodoList = () => {
  const { filtered } = useTodo();

  return (
    <div className="container">
      <ul className="todoList">
        {filtered.map((todo) => {
          return <TodoRow key={todo.id} todo={todo} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
