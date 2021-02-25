import React, { useCallback, useContext, useEffect } from 'react';
import { MdDone, MdDelete } from 'react-icons/md';
import TodoContext from '../contexts/TodoContext';
import todosApi from '../api/todosApi';
import todoDeleteApi from '../api/todoDeleteApi';
import AxiosContext from '../contexts/AxiosContext';

const TodoItem = ({ id, done, text }) => {
  const { todos, setTodos } = useContext(TodoContext);
  const { axios } = useContext(AxiosContext);

  const onSearch = useCallback(() => {
    todosApi(axios, setTodos);
  }, [axios, setTodos]);

  useEffect(() => {
    onSearch();
  }, [axios, setTodos, todos]);

  const onToggle = useCallback(() => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }, [todos]);

  const onRemove = useCallback(() => {
    // setTodos(todos.filter((todo) => todo.id !== id));
    todoDeleteApi(axios, id, done, text);
    onSearch();
  }, [todos, axios]);

  return (
    <div id="item">
      <div className={done ? 'circle_done' : 'check_circle'} onClick={onToggle}>
        {done && <MdDone />}
      </div>
      <div className={done ? 'text_done' : 'text'}>{text}</div>
      <div id="remove" onClick={onRemove}>
        <MdDelete />
      </div>
    </div>
  );
};

export default React.memo(TodoItem); //불필요한 리렌더링 방지
