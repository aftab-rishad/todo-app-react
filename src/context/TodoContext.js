import { createContext } from "react";
import { useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 0,
      todo: "This is your massage",
      done: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  doneTodo: (id) => {},
});

export const useTodo = () => useContext(TodoContext);

export const TodoProvider = TodoContext.Provider;
