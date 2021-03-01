import React, { useContext, useEffect } from 'react';
import todosApi from '../api/todosApi';
import AxiosContext from '../contexts/AxiosContext';
import TodoContext from '../contexts/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div id="todo_list">
      {todos && todos.map((todo) => (
        <TodoItem
          id={todo.id}
          text={todo.text}
          done={todo.done}
          key={todo.id}
        />
      ))}
    </div>
  );
};

export default TodoList;
