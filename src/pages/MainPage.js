import React from 'react';
import TodoCreate from '../components/TodoCreate';
import TodoHead from '../components/TodoHead';
import TodoList from '../components/TodoList';
import TodoTemplate from '../components/TodoTemplate';

const MainPage = () => {
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
