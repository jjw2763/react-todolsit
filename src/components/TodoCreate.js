import React, { useCallback, useContext, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import TodoContext from '../contexts/TodoContext';

const TodoCreate = () => {
    const [value, setValue] = useState('');
    const [open, setOpen] = useState(false);
    const { todos, setTodos, nextId } = useContext(TodoContext);

    const onToggle = () => setOpen(!open);
    
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onInsert = useCallback(text => {
        const todo = {
            id: nextId.current,
            text,
            done: false,
        };
        setTodos(todos.concat(todo));
        nextId.current += 1;
    }, [todos]
    );

    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue('');

        e.preventDefault();
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
                className={open ? "add_button_open" : "add_button"}
                onClick={onToggle}
                open={open}
            >
                <MdAdd />
            </button>
        </>
    );
};

export default TodoCreate;