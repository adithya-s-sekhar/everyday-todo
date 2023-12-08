import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = (props) => {
    const tasks = props.tasks;
    const [newTasks,setNewTasks] = useState(tasks);
    const [sortType, setSortType] = useState("sortAdded");

    console.log(sortType);

    useEffect(() => {
        let sortedTasks = [...tasks]
        if (sortType === "sortAdded") sortedTasks.sort((a,b) => a.id - b.id);
        if (sortType === "sortCompleted") sortedTasks.sort((a,b) => a.completed - b.completed);
        setNewTasks(sortedTasks);
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
                    {newTasks.map((newTasks) => (
                        <TaskItem task = { newTasks } key = {newTasks.id}/>
                    ))}
                </div>
            </div>
    );
}

export default TaskList
