import React, { useRef, useState, createContext } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '리액트 공부하기',
            done: true
        },
        {
            id: 2,
            text: '맛집 리스트 찾기',
            done: true
        }
        , {
            id: 3,
            text: '영화 소울 감상평 쓰기',
            done: false
        },
    ]);

    const nextId = useRef(4);

    const value = {
        todos,
        setTodos,
        nextId
    };

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
};

export default TodoContext;

