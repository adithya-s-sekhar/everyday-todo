import { Link } from "react-router-dom";

const TaskList = (props) => {
    const tasks = props.tasks;
    const handleTaskStatus = props.handleTaskStatus;

    return(
           <div className="task-list">
                {tasks.map((task) => (
                    <div className="task-item" key={task.id}>
                        <Link to={`/tasks/${task.id}`}>
                            <h2>{task.title}</h2>
                            {(task.status == 0) && <p className="status-text st-not-done">Status: Not done</p>}
                            {(task.status == 1) && <p className="status-text st-done">Status: Done</p>}
                            {(task.status == 2) && <p className="status-text st-wont-do">Status: Won't Do</p>}
                            <p>{task.details}</p>
                        </Link>
                        <div className="task-buttons">
                            {(task.status === 0 || task.status === 2) && <button className="task-button-done">Mark as Done</button>}
                            {(task.status === 1) && <button className="task-button-not-done">Mark as not done</button>}
                            {(task.status === 0) && <button className="task-button-wont-do">Won't Do</button>}
                            {(task.status === 1 || task.status === 2) && <button className="task-button-delete">Delete</button>}
                        </div>
                    </div>
                ))}
           </div>
    );
}

export default TaskList