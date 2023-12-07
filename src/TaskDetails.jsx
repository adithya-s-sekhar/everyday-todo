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
        <div className="task-details">
            <button className="back" onClick={() => navigate('/')}>&#128281;</button>
            { !dbLoaded && <div>Loading..</div> }
            { error && <div>Error: { error }</div> }
            { task && <div className="task-details-header">
                    <h1>{task.title}</h1> 
                    {task.completed && <p className="status-text st-done">Completed</p>}
                    {!task.completed && <p className="status-text st-not-done">Not completed</p>}
            </div> }
            { task && <div className="task-details-body">
                    <h2>Details</h2>
                    <p>{task.details}</p>
            </div> }
            { task && <div className = "task-buttons">
                            { !task.completed && <button className = "task-button-done" onClick = { doneTask }>Mark as done</button> }
                            { task.completed && <button className = "task-button-not-done" onClick = { notDoneTask }>Reset task</button> }
                            <button className = "task-button-delete" onClick = { deleteTask }>Delete</button>
            </div>}
        </div>
    );
}

export default TaskDetails
