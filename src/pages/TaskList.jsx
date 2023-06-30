import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TaskContext from '../context/TaskContext';
import { dateFormat } from '../helper';
import Popup from '../components/Popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

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
                                    <td>
                                        <span className='px-2' data-bs-toggle="modal" data-bs-target="#task-modal">
                                            <FontAwesomeIcon icon={faEye} />
                                        </span>

                                        <span className='px-2' data-bs-toggle="modal" data-bs-target="#task-modal">
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </span>

                                        <span className='px-2' data-bs-toggle="modal" data-bs-target="#task-modal">
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </span>
                                    </td>
                                </tr>
                            )
                        }): <tr><td>No Data</td></tr>
                    }
                </tbody>
            </table>
            
            <Popup />
        </div>
    );
}

export default TaskList;