import TaskList from "./TaskList";
import useFetch from "./useFetch";

const Home = () => {

    const {data: tasks, dbLoaded, error} = useFetch(process.env.REACT_APP_JSON_URL+'/tasks');

    //todo
    const handleTaskStatus = (id) => {
        console.log("todo");
    };

    return(
        <div className="home">
            <h1>Tasks</h1>
            {!dbLoaded && <div>Loading..</div>}
            {error && <div>Error: {error}</div>}
            {tasks && <TaskList tasks={tasks} handleTaskStatus={handleTaskStatus}/>}
        </div>
    );
}

export default Home