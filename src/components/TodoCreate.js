import React, { useCallback, useContext, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import AxiosContext from '../contexts/AxiosContext';
import TodoContext from '../contexts/TodoContext';
import todoCreateApi from '../api/todoCreateApi';

const TodoCreate = () => {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const { todos, setTodos } = useContext(TodoContext);
  const { axios } = useContext(AxiosContext);

  const onToggle = () => setOpen(!open);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        text,
        done: false,
      };
      setTodos(todos.concat(todo));

      todoCreateApi(axios, todo);
    },
    [todos, axios],
  );

  const onSubmit = useCallback((e) => {
    onInsert(value);
    setValue('');

    e.preventDefault(); //새로고침 방지
  });

  return (
    <>
      {open && (
        <div id="insert_form_positioner">
          <form id="insert_form" onSubmit={onSubmit}>
            <input
              id="input_insert"
              autoFocus
              placeholder="할 일을 입력 후, Enter를 누르세요"
              value={value}
              onChange={onChange}
            />
          </form>
        </div>
      )}
      <button
        className={open ? 'add_button_open' : 'add_button'}
        onClick={onToggle}
        open={open}
      >
        <MdAdd />
      </button>
    </>
  );
};

export default React.memo(TodoCreate);
