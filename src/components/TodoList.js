import React, { useContext } from 'react';
import TodoContext from '../contexts/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
    const {todos} = useContext(TodoContext);
    return (
        <div id="todo_list">
            {/* <TodoItem text="프로젝트 생성하기" done={true} />
            <TodoItem text="맛있는거 먹기" done={true} />
            <TodoItem text="책 읽기" done={false} />
            <TodoItem text="공부하기" done={false} /> */}
            {todos.map(todo => (
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