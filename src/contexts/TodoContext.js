import React, { useState, createContext, useRef } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const todo_id = useRef(1);

  const value = {
    todos,
    setTodos,
    todo_id,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoContext;
