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
                                {task.taskDate && <p className="task-item-date">{ task.taskDate }</p>}
                            </div>
                            <div className = "task-item-status">
                                { !task.completed && <div className="status-icon st-not-done"></div> }
                                { task.completed && <div className="status-icon st-done"></div> }
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
