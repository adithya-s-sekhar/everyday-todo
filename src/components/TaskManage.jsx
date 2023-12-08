import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import TaskDetails from "./TaskDetails";

const TaskManage = () => {
    const { id } = useParams();
    const taskUrl = process.env.REACT_APP_JSON_URL+'/tasks/'+id;
    const { data: task, dbLoaded, error } = useFetch(taskUrl);
    const navigate = useNavigate();

    return(
        <div className="task-manage">
            <button className="back" onClick={() => navigate('/')}>&#128281;</button>
            { !dbLoaded && <div>Loading..</div> }
            { error && <div>Error: { error }</div> }
            { task && <TaskDetails task = {task} taskUrl = {taskUrl}/>}
        </div>
    );
}

export default TaskManage;
