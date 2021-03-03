import React, { useContext, useEffect } from 'react';
import TodoCreate from '../components/TodoCreate';
import TodoHead from '../components/TodoHead';
import TodoList from '../components/TodoList';
import TodoTemplate from '../components/TodoTemplate';
import AxiosContext from '../contexts/AxiosContext';
import todosApi from '../api/todosApi';
import TodoContext from '../contexts/TodoContext';

const MainPage = () => {
  const { axios } = useContext(AxiosContext);
  const { setTodos } = useContext(TodoContext);

  useEffect(() => {
    todosApi(axios, setTodos);
  }, [axios, setTodos]);
  return (
    <>
      <div>
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </div>
    </>
  );
};

export default MainPage;
