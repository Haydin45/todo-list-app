import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../../network/requests/todos";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [filter, setFilter] = useState(-1);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const getRes = await getTodos();
      setTodos(getRes.data.reverse());
      setIsLoading(false);
    };

    getData();
  }, []);

  useEffect(() => {
    setFiltered(
      filter === -1
        ? [...todos]
        : todos.filter((todo) => todo.isCompleted === !!filter)
    );
  }, [todos, filter]);

  const addTodo = async (content) => {
    setIsLoading(true);

    const postRes = await createTodo({
      content: content,
      isCompleted: false,
    });

    if (postRes.statusText === "Created") {
      const getRes = await getTodos();
      setTodos(getRes.data.reverse());
    }

    setIsLoading(false);
  };

  const changeTodo = async (updatedTodo) => {
    setIsLoading(true);

    const putRes = await updateTodo(updatedTodo);

    if (putRes.statusText === "OK" || putRes.statusText === "No Content") {
      const getRes = await getTodos();
      setTodos(getRes.data.reverse());
    }

    setIsLoading(false);
  };

  const removeTodo = async (id) => {
    setIsLoading(true);

    const deleteRes = await deleteTodo(id);

    if (
      deleteRes.statusText === "Accepted" ||
      deleteRes.statusText === "No Content" ||
      deleteRes.statusText === "OK"
    ) {
      const getRes = await getTodos();
      setTodos(getRes.data.reverse());
    }

    setIsLoading(false);
  };

  return (
    <TodoContext.Provider
      value={{
        filtered,
        filter,
        setFilter,
        isLoading,
        addTodo,
        changeTodo,
        removeTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
