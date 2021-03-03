import React, { useCallback, useContext } from 'react';
import { MdDone, MdDelete } from 'react-icons/md';
import TodoContext from '../contexts/TodoContext';
import todoDeleteApi from '../api/todoDeleteApi';
import AxiosContext from '../contexts/AxiosContext';
import todoUpdateApi from '../api/todoUpdateApi';

const TodoItem = ({ id, text, done }) => {
  const { todos, setTodos } = useContext(TodoContext);
  const { axios } = useContext(AxiosContext);

  const onToggle = useCallback(() => {
    todoUpdateApi(axios, id, !done);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }, [todos]);

  const onRemove = useCallback(() => {
    todoDeleteApi(axios, id);
    setTodos(todos.filter((todo) => todo.id !== id));
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
