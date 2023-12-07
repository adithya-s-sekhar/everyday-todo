import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
    const [title,setTitle] = useState('');
    const [details,setDetails] = useState('');
    const [isPending,setIsPending] = useState(false);
    const status = 0;
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        const task = {title, details, status};

        setTimeout( () => {
            fetch(process.env.REACT_APP_JSON_URL+'/tasks',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
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
        <div className="add-task">
            <div className="task-input">
                <h1>Add Task</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    placeholder="Task title here"
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
                    <textarea 
                    placeholder="Task details here"
                    required 
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}/>
                    {!isPending && <button>Save</button>}
                    {isPending && <button disabled>Saving..</button>}
                </form>
            </div>
        </div>
    );
}

export default AddTask