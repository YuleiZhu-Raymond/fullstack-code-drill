import {useState } from "react";

const TodoInput = ({onAddTask }) => {
    const [input, setInput] = useState("");

    const handleSubmit = () => {
        if (input.trim() === "") return;
        onAddTask(input.trim());
        setInput("");
    };

    return (
        <div>
            <input 
                type="text"
                placeholder="Enter a task"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSubmit}>Add</button>
        </div>
    );
};

export default TodoInput;