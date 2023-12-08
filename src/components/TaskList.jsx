import TaskItem from "./TaskItem";

const TaskList = (props) => {
    const tasks = props.tasks;

    return(
           <div className = "task-list">
                {tasks.map((task) => (
                    <TaskItem task = { task }/>
                ))}
           </div>
    );
}

export default TaskList
