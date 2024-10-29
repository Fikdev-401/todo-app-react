/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [task, setTask] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        if (task.trim()) {
            addTodo(task);
            setTask(''); 
        }
    };

    return (
        <form onSubmit={submitHandler} className="mb-3">
            <div className="input-group">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="form-control"
                    placeholder="Add a new todo"
                    required
                />
                <button className="btn btn-primary" type="submit">
                    Add
                </button>
            </div>
        </form>
    );
}

export default TodoForm;
