import TaskList from "../components/TaskList";
import useFetch from "../hooks/useFetch";

const Home = () => {
    const { data: tasks, dbLoaded, error } = useFetch(process.env.REACT_APP_JSON_URL+'/tasks');

    return(
        <div className = "home">
            <h1>Tasks</h1>
            { !dbLoaded && <div>Loading..</div> }
            { error && <div>Error: { error }</div> }
            { tasks && <TaskList tasks = { tasks }/> }
        </div>
    );
}

export default Home
