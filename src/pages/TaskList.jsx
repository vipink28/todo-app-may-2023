import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TaskContext from '../context/TaskContext';
import { dateFormat } from '../helper';

function TaskList(props) {
    const {taskList}=useContext(TaskContext);

    return (
        <div className='container bg-primary p-5 text-white'>
            <div className="d-flex">
                <h4>Task List</h4>
                <Link className='ms-auto' to="/create-task">Create Task</Link>
            </div>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Duedate</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        taskList ? 
                        taskList.map((item)=>{
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td>{dateFormat(item.duedate)}</td>
                                    <td></td>
                                </tr>
                            )
                        }): <tr><td>No Data</td></tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TaskList;