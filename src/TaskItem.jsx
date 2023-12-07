import { Link } from "react-router-dom";

const TaskItem = (props) => {
    const tasks = props.tasks;

    return(
            <>
                {tasks.map((task) => (
                    <Link key = { task.id } to = {`/tasks/${ task.id }`}>
                        <div className="task-item">
                            <div className = "task-item-title">
                                <h2>{ task.title }</h2>
                            </div>
                            <div className = "task-item-status">
                                { !task.completed && <p className = "status-text st-not-done">Status: Not done</p> }
                                { task.completed && <p className = "status-text st-done">Status: Done</p> }
                            </div>
                            <div className = "task-item-details">
                                <h3>Details</h3>
                                <p>{ task.details }</p>
                            </div>
                        </div>
                    </Link>
                ))}
           </>
    );
}

export default TaskItem;
