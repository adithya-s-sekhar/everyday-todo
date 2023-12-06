import { Link } from "react-router-dom";

const TaskList = (props) => {
    const tasks = props.tasks;

    return(
           <div className="task-list">
                {tasks.map((task) => (
                    <div key={task.id} className={`task-item task`+task.status}>
                        <Link to={`/tasks/${task.id}`}>
                            <h2>{task.title}</h2>
                            {(task.status == 0) && <p className="status-text st-not-done">Status: Not done</p>}
                            {(task.status == 1) && <p className="status-text st-done">Status: Done</p>}
                            {(task.status == 2) && <p className="status-text st-wont-do">Status: Won't Do</p>}
                            <p>{task.details}</p>
                        </Link>
                    </div>
                ))}
           </div>
    );
}

export default TaskList