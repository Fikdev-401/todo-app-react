/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';


function TodoList({ todos, deleteHandler, updateTodo }) {


    return (
        <table className="table mt-3">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Task</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((item, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.task}</td>
                        <td>
                            <span className={`badge ${item.status ? 'bg-success' : 'bg-warning'}`}>
                                {item.status ? 'Completed' : 'Pending'}
                            </span>
                        </td>
                        <td>
                            {item.status ?
                                <button className="btn btn-primary me-2" onClick={() => updateTodo(item.id)}>
                                    <span>Yeayy! selesai</span>
                                </button> :

                                <button className="btn btn-warning text-white me-2" onClick={() => updateTodo(item.id)}>
                                    <span>Belum selesai :(</span>
                                </button>
                            }
                            <button className="btn btn-danger" onClick={() => deleteHandler(item.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>


    );
}

export default TodoList;
