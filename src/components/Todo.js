import React from 'react';

const Todo = ({ todos }) => {
    const liItems = (todos && todos.map((t, i) => <li key={i}>{t}</li>)) || null;
    return (
        <ul className="none">
            {liItems}
        </ul>
    )
}

export default Todo;