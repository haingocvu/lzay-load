import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [todoList, setTodoList] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [LLTodo, setLLTodo] = useState(null);

    const inputChangedHandler = (e) => {
        const { target: { value } } = e;
        setInputValue(value)
    }

    useEffect(() => {
        todoList.length && lazyLoadComponent();
    }, [todoList])

    const lazyLoadComponent = async () => {
        const  Todo = React.lazy(() => import('./components/Todo'))
        setLLTodo(Todo);
    }

    const addTotoHandler = () => {
        if (!inputValue) return;
        const newTodoList = todoList.concat(inputValue);
        setTodoList(newTodoList)
        setInputValue('');
    }

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <div className="App">
                <header className="App-header">
                    Add todo
                </header>
                <input value={inputValue} onChange={inputChangedHandler} />
                <button onClick={addTotoHandler}>Add</button>
                <hr />
                {LLTodo && <LLTodo todos={todoList}/>}
            </div>
        </React.Suspense>
    );
}

export default App;
