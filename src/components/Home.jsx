import TaskList from "./TaskList";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

const Home = () => {
    const { data: tasks, dbLoaded, error } = useFetch(process.env.REACT_APP_JSON_URL);

    const [taskCount,setTaskCount] = useState('');

    let count = 0;

    useEffect(() => {
        if (tasks) {
            for (let i of tasks) {
                if (!i.completed) {
                    count++;
                }
            }
        }
        setTaskCount(count);
    },[tasks,taskCount]);

    return(
        <div className = "home">
            <h1>Tasks ({taskCount} left)</h1>
            { !dbLoaded && <div>Loading..</div> }
            { error && <div>Error: { error }</div> }
            { tasks && <TaskList tasks = { tasks }/> }
        </div>
    );
}

export default Home;
