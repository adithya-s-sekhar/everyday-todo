import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TaskDetails = () => {
    const { id } = useParams();
    const { data: task, dbLoaded, error } = useFetch("http://localhost:8000/tasks/"+id)

    return(
        <div>
            <h1>Details</h1>
            {!dbLoaded && <div>Loading..</div>}
            {error && <div>Error: {error}</div>}
            {
                task &&
                <div className="task-details">
                    <h2>{task.title}</h2>
                    {(task.status == 0) && <p className="status-text st-not-done">Status: Not done</p>}
                    {(task.status == 1) && <p className="status-text st-done">Status: Done</p>}
                    {(task.status == 2) && <p className="status-text st-wont-do">Status: Won't Do</p>}
                    <p>{task.details}</p>
                    <div className="task-buttons">
                            {(task.status === 0 || task.status === 2) && <button className="task-button-done">Mark as Done</button>}
                            {(task.status === 1) && <button className="task-button-not-done">Mark as not done</button>}
                            {(task.status === 0) && <button className="task-button-wont-do">Won't Do</button>}
                            {(task.status === 1 || task.status === 2) && <button className="task-button-delete">Delete</button>}
                    </div>
                </div>
            }
        </div>
    );
}

export default TaskDetails