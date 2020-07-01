import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.inputChangedHandler = this.inputChangedHandler.bind(this);
        this.lazyLoadComponent = this.lazyLoadComponent.bind(this);
        this.addToDoHandler = this.addToDoHandler.bind(this);
    }

    state = {
        todoList: [],
        inputValue: '',
        LLTodo: null,
    }

    componentDidUpdate() {
        const { LLTodo, todoList } = this.state;
        todoList.length && !LLTodo && this.lazyLoadComponent();
    }

    inputChangedHandler(e) {
        const { target: { value } } = e;
        this.setState({
            inputValue: value,
        })
    }

    async lazyLoadComponent() {
        const { default: todo } = await import('./components/Todo');
        this.setState({
            LLTodo: todo,
        })
    }

    addToDoHandler() {
        const { inputValue, todoList } = this.state;
        if (!inputValue) return;
        const newTodoList = todoList.concat(inputValue);
        this.setState({
            todoList: newTodoList,
            inputValue: '',
        })
    }

    render() {
        const { LLTodo, todoList, inputValue } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    Add todo
                    </header>
                <input value={inputValue} onChange={this.inputChangedHandler} />
                <button onClick={this.addToDoHandler}>Add</button>
                <hr />
                {LLTodo && <LLTodo todos={todoList} />}
            </div>
        );
    }
}

export default App;
