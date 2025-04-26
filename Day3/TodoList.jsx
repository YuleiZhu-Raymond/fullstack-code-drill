import { useState } from "react";

function TodoList() {

    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState([]);
    
    function handleAddTask() {
        if (inputValue.trim() !== "") {
            setTasks([...tasks, inputValue]);
        }
    }

    function handleInputChange(e) {
        setInputValue(e.target.value);
    }

    function handleDeleteTask(index) {
        const confirmed = window.confirm("Are you sure you want to delete this task?");
        if (confirmed) {
            setTasks(tasks.filter((_, i) => i !== index));
        }
    }


    return (
        <div>
            <h2>My Todo List</h2>
            <input 
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={handleAddTask}>Add</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => handleDeleteTask(index)}>Delete</button>
                    </li>
                ))}                
            </ul>
        </div>
    );
}

export default TodoList;
