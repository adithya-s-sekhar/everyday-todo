import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TaskDetails = () => {
    const { id } = useParams();
    const { data: task, dbLoaded, error } = useFetch(process.env.REACT_APP_JSON_URL+'/tasks/'+id);
    const navigate = useNavigate();

    const doneTask = () => {
        const newTask = { ...task, completed: true };
        fetch(process.env.REACT_APP_JSON_URL+'/tasks/'+task.id,{
            method: 'DELETE'
        }).then(() => {
            fetch(process.env.REACT_APP_JSON_URL+'/tasks',{
                method: 'POST',
                headers: { 'Content-Type':'application/json' },
                body: JSON.stringify(newTask)
            })
        })
    }

    const notDoneTask = () => {
        const newTask = { ...task, completed: false };
        fetch(process.env.REACT_APP_JSON_URL+'/tasks/'+task.id,{
            method: 'DELETE'
        }).then(() => {
            fetch(process.env.REACT_APP_JSON_URL+'/tasks',{
                method: 'POST',
                headers: { 'Content-Type':'application/json' },
                body: JSON.stringify(newTask)
            })
        })
    }

    const deleteTask = () => {
        fetch(process.env.REACT_APP_JSON_URL+'/tasks/'+task.id,{
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }

    return(
        <div>
            { !dbLoaded && <div>Loading..</div> }
            { error && <div>Error: { error }</div> }
            { task &&
                <div className = "task-details">
                    <div className = "task-details-title">
                        <div className="task-details-title-text">
                            <h1>{ task.title }</h1>
                        </div>
                        <div className="task-details-title-status">
                            { !task.completed && <p className = "status-text st-not-done">Status: Not done</p> }
                            { task.completed && <p className = "status-text st-done">Status: Done</p> }
                        </div>
                    </div>
                    <div className = "task-details-actions">
                        <div className = "task-buttons">
                            { !task.completed && <button className = "task-button-done" onClick = { doneTask }>Mark as Done</button> }
                            { task.completed && <button className = "task-button-not-done" onClick = { notDoneTask }>Mark as not done</button> }
                            <button className = "task-button-delete" onClick = { deleteTask }>Delete</button>
                        </div>
                    </div>
                    <div className="task-details-details">
                        <h2>Details</h2>
                        <p>{ task.details }</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default TaskDetails
