import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = (props) => {
    const tasks = props.tasks;
    const [sortedTasks,setSortedTasks] = useState(tasks);
    const [sortType, setSortType] = useState("sortAdded");

    useEffect(() => {
        let newTasks = [...tasks]
        if (sortType === "sortAdded") newTasks.sort((a,b) => a.id - b.id);
        if (sortType === "sortCompleted") newTasks.sort((a,b) => a.completed - b.completed);
        setSortedTasks(newTasks);
    },[sortType])

    const handleSort = (e) => {
        e.preventDefault();
        setSortType(e.target.value);
    }

    return(
            <div className="task-list">
                <div className="sort-button">
                    Sort by: <select value={sortType} onChange={handleSort}>
                    <option value="sortAdded">Added order</option>
                    <option value="sortCompleted">Completion</option>
                    </select>
                </div>
                <div className = "task-items">
                    {sortedTasks.map((sortedTask) => (
                        <TaskItem task = { sortedTask } key = {sortedTask.id}/>
                    ))}
                </div>
            </div>
    );
}

export default TaskList
