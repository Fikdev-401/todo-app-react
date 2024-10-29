/* eslint-disable no-const-assign */
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

    const deleteHandler = (id) => {
        axios({
            method: 'DELETE',
            url: `http://localhost:3000/todos/${id}`,
        }
        ).then(() => {
            getTodo();
        }).catch((err) => console.log(err));
    };

    const addTodo = (task) => {
        axios.post('http://localhost:3000/todos', { task, status: false })
            .then(() => getTodo())
            .catch((err) => console.error('Error adding todo:', err));
    };

    const updateTodo = (id) => {
        // Temukan item yang akan di-update berdasarkan ID
        const todoToUpdate = todos.find((todo) => todo.id === id);
    
        // Balik status dari item yang akan di-update
        const updatedStatus = !todoToUpdate.status;
    
        axios({
            method: 'PUT',
            url: `http://localhost:3000/todos/${id}`,
            data: { ...todoToUpdate, status: updatedStatus } // kirim data terbaru dengan status terbalik
        })
        .then((result) => {
            // Update item di list todos
            setTodos((prevTodos) =>
                prevTodos.map((todo) =>
                    todo.id === id ? { ...todo, status: updatedStatus } : todo
                )
            );
            console.log("Todo updated:", result.data);
        })
        .catch((err) => console.log(err));
    };
    


    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Todo App</h2>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} deleteHandler={deleteHandler} updateTodo={updateTodo}/>
        </div>
    );
}

export default App;
