import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoFooter from "./TodoBody";

const Todos = () => {
  const [todos, setTodos] = useState([
    { todoName: "Learn React", isActive: true },
    { todoName: "Code Furiously", isActive: false },
    { todoName: "Finish Tasks", isActive: false },
    { todoName: "Have a life", isActive: true },
  ]);

  return (
    <div className="container">
      <AddTodo todos={todos} setTodos={setTodos} />
      {todos.length ? <TodoFooter todos={todos} setTodos={setTodos} /> : null}
    </div>
  );
};

export default Todos;
