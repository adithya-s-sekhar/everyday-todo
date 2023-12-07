import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TaskDetails = () => {
    const { id } = useParams();
    const { data: task, dbLoaded, error } = useFetch(process.env.REACT_APP_JSON_URL+'/tasks/'+id);
    const navigate = useNavigate();

    const doneTask = () => {
        const newTask = {...task, status:1};
        console.log(newTask);
        fetch(process.env.REACT_APP_JSON_URL+'/tasks/'+task.id,{
            method: 'DELETE'
        }).then(() => {
            fetch(process.env.REACT_APP_JSON_URL+'/tasks',{
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(newTask)
            })
        })
    }
    const notDoneTask = () => {
        const newTask = {...task, status:0};
        console.log(newTask);
        fetch(process.env.REACT_APP_JSON_URL+'/tasks/'+task.id,{
            method: 'DELETE'
        }).then(() => {
            fetch(process.env.REACT_APP_JSON_URL+'/tasks',{
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(newTask)
            })
        })
    }
    const wontDoTask = () => {
        const newTask = {...task, status:2};
        console.log(newTask);
        fetch(process.env.REACT_APP_JSON_URL+'/tasks/'+task.id,{
            method: 'DELETE'
        }).then(() => {
            fetch(process.env.REACT_APP_JSON_URL+'/tasks',{
                method: 'POST',
                headers: {'Content-Type':'application/json'},
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
            {!dbLoaded && <div>Loading..</div>}
            {error && <div>Error: {error}</div>}
            {
                task &&
                <div className="task-details">
                    <div className="task-details-title">
                    <h1>{task.title}</h1>
                    </div>
                    <div className="task-details-actions">
                        <div className="task-details-status">
                        {(task.status == 0) && <p className="status-text st-not-done">Status: Not done</p>}
                        {(task.status == 1) && <p className="status-text st-done">Status: Done</p>}
                        {(task.status == 2) && <p className="status-text st-wont-do">Status: Won't Do</p>}
                        </div>
                        <div className="task-buttons">
                                {(task.status === 0) && <button className="task-button-done" onClick={doneTask}>Mark as Done</button>}
                                {(task.status === 1) && <button className="task-button-not-done" onClick={notDoneTask}>Mark as not done</button>}
                                {(task.status === 0) && <button className="task-button-wont-do" onClick={wontDoTask}>Won't Do</button>}
                                {(task.status === 1 || task.status === 2) && <button className="task-button-delete" onClick={deleteTask}>Delete</button>}
                        </div>
                    </div>
                    <div className="task-details-details">
                        <h2>Details</h2>
                        <p>{task.details}</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default TaskDetails