import { env } from "../env/env";
import { baseService } from "../services/baseService";

export const getTodos = () => {
  return baseService.get(env.mockApi, "todos");
};

export const getTodoById = (id) => {
  return baseService.get(env.mockApi, `todos/${id}`);
};

export const createTodo = (newTodo) => {
  return baseService.post(env.mockApi, "todos", newTodo);
};

export const updateTodo = (updatedTodo) => {
  return baseService.put(env.mockApi, `todos/${updatedTodo.id}`, updatedTodo);
};

export const deleteTodo = (id) => {
  return baseService.delete(env.mockApi, `todos/${id}`);
};
