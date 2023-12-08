import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
    const [title,setTitle] = useState('');
    const [details,setDetails] = useState('');
    const [taskDate,setTaskDate] = useState(() => {
        const d = new Date();
        const d_year = d.getFullYear();
        let d_month = d.getMonth();
        d_month = d_month + 1;
        let d_day = d.getDate();
        if (d_day < 10) d_day = '0'+d_day;
        const d_full = d_year+'-'+d_month+'-'+d_day;
        return d_full;
    });
    const [isPending,setIsPending] = useState(false);
    const completed = false;
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        const task = { title, details, taskDate, completed };

        setTimeout( () => {
            fetch(process.env.REACT_APP_JSON_URL+'/tasks',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(task)
            })
            .then(() => {
                setIsPending(false);
                navigate("/");
            })
            }, 500
        )
    }

    return(
        <div className = "add-task">
            <div className = "task-input">
                <h1>Add Task</h1>
                <form onSubmit = { handleSubmit }>
                    <input 
                    type = "text" 
                    placeholder = "Task title here"
                    required 
                    value = { title }
                    onChange={ (e) => setTitle(e.target.value) }/>
                    <textarea 
                    placeholder = "Task details here"
                    required 
                    value = { details }
                    onChange = { (e) => setDetails(e.target.value) }/>
                    <input 
                    type = "date"
                    value = { taskDate }
                    onChange = { (e) => setTaskDate(e.target.value)}/>
                    { !isPending && <button>Save</button> }
                    { isPending && <button disabled>Saving..</button> }
                </form>
            </div>
        </div>
    );
}

export default AddTask
