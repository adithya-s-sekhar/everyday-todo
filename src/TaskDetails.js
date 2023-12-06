import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TaskDetails = () => {
    const { id } = useParams();
    const { data: task, dbLoaded, error } = useFetch("http://localhost:8000/tasks/"+id);
    const navigate = useNavigate();

    const doneTask = () => {
        const newTask = {...task, status:1};
        console.log(newTask);
        fetch('http://localhost:8000/tasks/'+task.id,{
            method: 'DELETE'
        }).then(() => {
            fetch('http://localhost:8000/tasks',{
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(newTask)
            })
        })
    }
    const notDoneTask = () => {
        const newTask = {...task, status:0};
        console.log(newTask);
        fetch('http://localhost:8000/tasks/'+task.id,{
            method: 'DELETE'
        }).then(() => {
            fetch('http://localhost:8000/tasks',{
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(newTask)
            })
        })
    }
    const wontDoTask = () => {
        const newTask = {...task, status:2};
        console.log(newTask);
        fetch('http://localhost:8000/tasks/'+task.id,{
            method: 'DELETE'
        }).then(() => {
            fetch('http://localhost:8000/tasks',{
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(newTask)
            })
        })
    }
    const deleteTask = () => {
        fetch('http://localhost:8000/tasks/'+task.id,{
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }

    return(
        <div>
            <h1>Details</h1>
            {!dbLoaded && <div>Loading..</div>}
            {error && <div>Error: {error}</div>}
            {
                task &&
                <div className={`task-details task`+task.status}>
                    <h2>{task.title}</h2>
                    {(task.status == 0) && <p className="status-text st-not-done">Status: Not done</p>}
                    {(task.status == 1) && <p className="status-text st-done">Status: Done</p>}
                    {(task.status == 2) && <p className="status-text st-wont-do">Status: Won't Do</p>}
                    <h3>Details</h3>
                    <p>{task.details}</p>
                    <div className="task-buttons">
                            {(task.status === 0) && <button className="task-button-done" onClick={doneTask}>Mark as Done</button>}
                            {(task.status === 1) && <button className="task-button-not-done" onClick={notDoneTask}>Mark as not done</button>}
                            {(task.status === 0) && <button className="task-button-wont-do" onClick={wontDoTask}>Won't Do</button>}
                            {(task.status === 1 || task.status === 2) && <button className="task-button-delete" onClick={deleteTask}>Delete</button>}
                    </div>
                </div>
            }
        </div>
    );
}

export default TaskDetails