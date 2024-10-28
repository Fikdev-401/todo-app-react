/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
    const [todos, setTodos] = useState([]);

    const getTodo = () => {
        axios.get('http://localhost:3000/todos')
            .then((response) => setTodos(response.data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getTodo();
    }, []);

    const addTodo = (task) => {
        axios.post('http://localhost:3000/todos', { task, status: false })
            .then(() => getTodo())
            .catch((err) => console.error('Error adding todo:', err));
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Todo App</h2>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} />
        </div>
    );
}

export default App;
