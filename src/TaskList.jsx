import { Link } from "react-router-dom";

const TaskList = (props) => {
    const tasks = props.tasks;

    return(
           <div className = "task-list">
                {tasks.map((task) => (
                    <Link to = {`/tasks/${ task.id }`}>
                    <div key = { task.id } className = { `task-item task`+task.status }>
                        <div className = "task-item-title">
                            <h2>{ task.title }</h2>
                        </div>
                        <div className = "task-item-status">
                            { (task.status === 0) && <p className = "status-text st-not-done">Status: Not done</p> }
                            { (task.status === 1) && <p className = "status-text st-done">Status: Done</p> }
                            { (task.status === 2) && <p className = "status-text st-wont-do">Status: Won't Do</p> }
                        </div>
                        <div className = "task-item-details">
                            <h3>Details</h3>
                            <p>{ task.details }</p>
                        </div>
                    </div>
                    </Link>
                ))}
           </div>
    );
}

export default TaskList
