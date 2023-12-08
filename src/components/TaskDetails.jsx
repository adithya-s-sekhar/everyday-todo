import { useNavigate } from "react-router-dom";

const TaskDetails = (props) => {
    const task = props.task;
    const taskUrl = props.taskUrl;
    const navigate = useNavigate();

    const changeTask = (taskStatus) => {
        const newTask = { ...task, completed: taskStatus };
        fetch(taskUrl,{
            method: 'DELETE'
        }).then(() => {
            fetch(process.env.REACT_APP_JSON_URL,{
                method: 'POST',
                headers: { 'Content-Type':'application/json' },
                body: JSON.stringify(newTask)
            });
        })
    }

    const deleteTask = () => {
        fetch(taskUrl,{
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }


    return(
        <div className="task-details">
            <div className="task-details-header">
                <h1>{task.title}</h1> 
                <p className="task-details-date"><b>Date</b>: {task.taskDate}</p>
                {task.completed && <p className="status-text st-done">Completed</p>}
                {!task.completed && <p className="status-text st-not-done">Not completed</p>}
            </div>
            <div className="task-details-body">
                <h2>Details</h2>
                <p>{task.details}</p>
            </div>
            <div className = "task-buttons">
                { !task.completed && <button className = "task-button-done" onClick = { () => {changeTask(true)} }>Mark as done</button> }
                { task.completed && <button className = "task-button-not-done" onClick = { () => {changeTask(false)} }>Reset task</button> }
                <button className = "task-button-delete" onClick = { deleteTask }>Delete</button>
            </div>
        </div>
    )
}

export default TaskDetails;
