const AddTask = () => {
    return(
        <div className="add-task">
            <h1>Add Task</h1>
            <form>
                <label>Title: </label>
                <input 
                type="text" 
                placeholder="Task title here"
                required />
                <label>Details: </label>
                <textarea 
                placeholder="Task details here"
                required 
                no/>
                <button>
                    Save
                </button>
            </form>
        </div>
    );
}

export default AddTask