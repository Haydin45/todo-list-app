import React from "react";

const TodoList = ({ todos, setTodos }) => {
  const changeIsActive = (index) => {
    setTodos(
      todos.map((todo, i) => {
        if (i === index) {
          return { ...todo, isActive: !todo.isActive };
        }
        return todo;
      })
    );
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((todo) => todo !== todos[index]));
  };

  const changeTodoName = (value, index) => {
    setTodos(
      todos.map((todo, i) => {
        if (i === index) {
          return { ...todo, todoName: value };
        }
        return todo;
      })
    );
  };

  return (
    <div>
      <ul className="todoList">
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <button
                id="btnStatus"
                onClick={() => changeIsActive(index)}
                disabled={!todo.todoName}
              >
                {todo.isActive ? (
                  <i className="fa-regular fa-circle todoStatus"></i>
                ) : (
                  <i className="fa-regular fa-circle-check todoStatus"></i>
                )}
              </button>
              <input
                type="text"
                value={todo.todoName}
                onChange={(e) => changeTodoName(e.target.value, index)}
                placeholder="(Text)"
                className={!todo.isActive ? "passiveInput" : ""}
              />
              <button className="deleteBtn" onClick={() => removeTodo(index)}>
                x
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
