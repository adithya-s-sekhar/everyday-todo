import { Link } from "react-router-dom";
import TaskItem from "./TaskItem";

const TaskList = (props) => {
    const tasks = props.tasks;

    return(
           <div className = "task-list">
                <TaskItem tasks = { tasks } />
           </div>
    );
}

export default TaskList
