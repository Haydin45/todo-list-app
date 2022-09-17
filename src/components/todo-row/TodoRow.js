import React, { useState } from "react";
import { useTodo } from "../../contexts/todo/TodoContext";

const TodoRow = ({ todo }) => {
  const { isLoading, changeTodo, removeTodo } = useTodo();
  const [content, setContent] = useState(todo.content);

  return (
    <li>
      <button
        id="btnStatus"
        onClick={() => changeTodo({ ...todo, isCompleted: !todo.isCompleted })}
        disabled={isLoading}
      >
        {!todo.isCompleted ? (
          <i className="fa-regular fa-circle todoStatus"></i>
        ) : (
          <i className="fa-regular fa-circle-check todoStatus"></i>
        )}
      </button>
      <input
        type="text"
        value={content}
        onBlur={(e) =>
          content.trimEnd() !== todo.content &&
          changeTodo({ ...todo, content: e.target.value.trimEnd() })
        }
        onChange={(e) =>
          e.target.value.trimEnd().length >= 3 && setContent(e.target.value)
        }
        placeholder="(Text)"
        className={todo.isCompleted ? "passiveInput" : ""}
        disabled={isLoading}
      />
      <button
        className="deleteBtn"
        onClick={() => removeTodo(todo.id)}
        disabled={isLoading}
      >
        x
      </button>
    </li>
  );
};

export default TodoRow;
