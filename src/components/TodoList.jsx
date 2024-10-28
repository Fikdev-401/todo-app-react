/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function TodoList({ todos }) {
    return (
        <ul className="list-group mt-3">
            {todos.map((item, index) => (
                <li
                    key={index}
                    className={`list-group-item d-flex justify-content-between align-items-center ${item.status ? 'list-group-item-success' : 'list-group-item-light'}`}
                >
                    <span>{item.task}</span>
                    <span className={`badge ${item.status ? 'bg-success' : 'bg-warning'} rounded-pill`}>
                        {item.status ? 'Completed' : 'Pending'}
                    </span>
                </li>
            ))}
        </ul>

    );
}

export default TodoList;
