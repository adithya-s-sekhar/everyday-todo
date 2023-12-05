const AddTask = () => {
    return(
        <div className="add-task">
            <h1>Add Task</h1>
            <form>
                <label>Title: </label>
                <input 
                type="text" 
                required />
                <label>Details: </label>
                <textarea 
                required />
                <button>
                    Save
                </button>
            </form>
        </div>
    );
}

export default AddTask