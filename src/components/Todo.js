import React from 'react';

function Todo(props) {
    debugger
    const { todos } = props;
    const liItems = (todos && todos.map((t, i) => <li key={i}>{t}</li>)) || null;
    return (
        <ul className="none">
            {liItems}
        </ul>
    )
}

export default Todo;