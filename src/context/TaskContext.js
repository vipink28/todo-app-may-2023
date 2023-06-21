import { createContext, useContext, useState } from "react";
import AuthContext from "./AuthContext";

const TaskContext = createContext();

export const TaskProvider=({children})=>{

    const {setMessage} = useContext(AuthContext);
    const [task, setTask]= useState(null);
    //create task function
    const createTask=async(formData)=>{
        const config = {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formData)
        }
        const response = await fetch("http://localhost:5000/tasks", config);
        if(response.ok){
            setMessage("Task created successfully");
            const taskData = await response.json();
            setTask(taskData);
        }else{
            setMessage("Something went wrong, please try again");
        }
    }

    return(
        <TaskContext.Provider value={{
            createTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}


export default TaskContext;