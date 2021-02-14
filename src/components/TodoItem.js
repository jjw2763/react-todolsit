import React, { useCallback, useContext } from 'react';
import { MdDone, MdDelete } from 'react-icons/md';
import TodoContext from '../contexts/TodoContext';

const TodoItem = ({ id, done, text }) => {
    const { todos, setTodos } = useContext(TodoContext);

    const onToggle = useCallback(() => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            ));
    }, [todos]);

    const onRemove = useCallback(() => {
        setTodos(
            todos.filter(todo => todo.id !== id)
        );
    }, [todos]);

    return (
        <div id="item">
            <div className={done ? "circle_done" : "check_circle"} onClick={onToggle}>{done && <MdDone />}</div>
            <div className={done ? "text_done" : "text"}>{text}</div>
            <div id="remove" onClick={onRemove}><MdDelete /></div>
        </div>
    );
};

export default React.memo(TodoItem);